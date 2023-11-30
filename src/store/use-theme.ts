import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { combine, createJSONStorage, persist } from 'zustand/middleware';

import { Theme } from '../themes';

const initialState = {
  currentTheme: 'light' as Theme,
};

export const useTheme = create(
  persist(
    combine(initialState, set => ({
      changeTheme: (theme: Theme) => set({ currentTheme: theme }),
    })),
    { name: 'theme', storage: createJSONStorage(() => AsyncStorage) }
  )
);
