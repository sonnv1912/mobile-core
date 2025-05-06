import i18n, { type Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';

export const initI18n = (resources: Resource) => {
   i18n.use(initReactI18next).init({
      resources,
      lng: 'en',
      interpolation: {
         escapeValue: false,
      },
   });

   return i18n;
};
