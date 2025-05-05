import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type State = {
   colorMode: 'light' | 'dark';
};

type Action = {
   setAppState: (payload: Partial<State>) => void;
};

export const useAppStore = create<State & Action>()(
   persist(
      (set) => ({
         colorMode: 'light',

         setAppState(payload) {
            set((prev) => ({
               ...prev,
               ...payload,
            }));
         },
      }),
      {
         name: 'auth',
         storage: createJSONStorage(() => AsyncStorage),
      },
   ),
);
