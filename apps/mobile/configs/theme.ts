import {
   PlusJakartaSans_200ExtraLight,
   PlusJakartaSans_300Light,
   PlusJakartaSans_400Regular,
   PlusJakartaSans_500Medium,
   PlusJakartaSans_600SemiBold,
   PlusJakartaSans_700Bold,
   PlusJakartaSans_800ExtraBold,
} from '@expo-google-fonts/plus-jakarta-sans';
import { vars } from 'nativewind';

export const font = {
   plusJakarta: {
      ExtraLight: PlusJakartaSans_200ExtraLight,
      Light: PlusJakartaSans_300Light,
      Regular: PlusJakartaSans_400Regular,
      Medium: PlusJakartaSans_500Medium,
      SemiBold: PlusJakartaSans_600SemiBold,
      Bold: PlusJakartaSans_700Bold,
      ExtraBold: PlusJakartaSans_800ExtraBold,
   },
};

export const theme = {
   default: {
      light: vars({
         '--color-background': '#ffffff',
         '--color-primary': '#4f46e5',
         '--color-danger': '#f43f5e',
         '--color-gray': '#cbd5e1',

         '--color-divider': '#e2e8f0',

         '--color-box-primary': '#f8fafc',
         '--color-box-secondary': '#f1f5f9',
         '--color-box-tertiary': '#e2e8f0',

         '--color-t-strong': '#1e293b',
         '--color-t-normal': '#475569',
         '--color-t-muted': '#94a3b8',
      }),
      dark: vars({}),
   },
};
