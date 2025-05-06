import { IS_WEB } from '@packages/configs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type State = {
   loggedIn: boolean;
   user: null;
};

type Action = {
   setAuthState: (payload: Partial<State>) => void;
};

export const useAuthStore = create<State & Action>()(
   persist(
      (set) => ({
         loggedIn: false,
         user: null,

         setAuthState(payload) {
            set((prev) => ({
               ...prev,
               ...payload,
            }));
         },
      }),
      {
         name: 'app',
         storage: createJSONStorage(() => {
            return IS_WEB ? localStorage : AsyncStorage;
         }),
      },
   ),
);
