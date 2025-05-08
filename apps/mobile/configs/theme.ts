import { vars } from 'nativewind';

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
