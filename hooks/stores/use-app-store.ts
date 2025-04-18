import { create } from 'zustand';

type State = {
   colorMode: 'light' | 'dark';
};

type Action = {
   setAppState: (payload: Partial<State>) => void;
};

export const useAppStore = create<State & Action>((set) => ({
   colorMode: 'light',

   setAppState(payload) {
      set((prev) => ({
         ...prev,
         ...payload,
      }));
   },
}));
