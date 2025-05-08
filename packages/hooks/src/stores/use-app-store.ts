import { IS_WEB } from '@packages/configs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type State = {
   colorMode: 'light' | 'dark';
   colorPallet: {
      background: string;
      primary: string;
      danger: string;
      gray: string;

      divider: string;

      'box-primary': string;
      'box-secondary': string;
      'box-tertiary': string;

      't-strong': string;
      't-normal': string;
      't-muted': string;
   };
};

type Action = {
   setAppState: (payload: Partial<State>) => void;
};

export const useAppStore = create<State & Action>()(
   persist(
      (set) => ({
         colorMode: 'light',
         colorPallet: {
            background: '#ffffff',
            primary: '#4f46e5',
            danger: '#f43f5e',
            gray: '#cbd5e1',

            divider: '#e2e8f0',

            'box-primary': '#f8fafc',
            'box-secondary': '#f1f5f9',
            'box-tertiary': '#e2e8f0',

            't-strong': '#1e293b',
            't-normal': '#475569',
            't-muted': '#94a3b8',
         },

         setAppState(payload) {
            set((prev) => ({
               ...prev,
               ...payload,
            }));
         },
      }),
      {
         name: 'auth',
         storage: createJSONStorage(() => {
            return IS_WEB ? localStorage : AsyncStorage;
         }),
      },
   ),
);
