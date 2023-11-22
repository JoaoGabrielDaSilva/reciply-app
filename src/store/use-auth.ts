import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { combine, createJSONStorage, persist } from 'zustand/middleware';

type UseAuth = {
  user: {
    id: number;
    name: string;
    email: string;
  } | null;
  isAuthenticated: boolean;
};

const initialState: UseAuth = {
  user: null,
  isAuthenticated: false,
};

export const useAuth = create(
  persist(
    combine(initialState, set => ({ set })),
    { name: 'auth', storage: createJSONStorage(() => AsyncStorage) }
  )
);
