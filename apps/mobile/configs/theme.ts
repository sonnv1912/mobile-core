import { vars } from 'nativewind';

export const colorPallet = {
   primary: {
      '50': '#f5f5f6',
      '100': '#e6e6e7',
      '200': '#cfd0d2',
      '300': '#aeafb2',
      '400': '#85868b',
      '500': '#6a6b70',
      '600': '#5a5b60',
      '700': '#4d4d51',
      '800': '#434347',
      '900': '#3b3b3e',
      '950': '#262628',
   },
};

export const theme = {
   default: {
      light: vars({
         '--color-primary': colorPallet.primary[200],
      }),
      dark: vars({
         '--color-primary': colorPallet.primary[950],
      }),
   },
};
