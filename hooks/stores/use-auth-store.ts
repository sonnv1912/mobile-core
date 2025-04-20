import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type State = {
   isLoggedIn: boolean;
   user: null;
};

type Action = {
   setAuthState: (payload: Partial<State>) => void;
};

export const useAuthStore = create<State & Action>()(
   persist(
      (set) => ({
         isLoggedIn: false,
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
         storage: createJSONStorage(() => AsyncStorage),
      },
   ),
);
