import { create } from 'zustand';
import { combine } from 'zustand/middleware';

const initialState = {
  index: 0,
};

export const useTabIndex = create(
  combine(initialState, set => ({
    setTabIndex: (index: number) => set({ index }),
  }))
);
