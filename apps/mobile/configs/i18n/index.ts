import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enCommon from './locales/en/common.json';

const resources = {
   en: {
      common: enCommon,
   },
};

i18n.use(initReactI18next).init({
   resources,
   lng: 'en',
   interpolation: {
      escapeValue: false,
   },
});

export default i18n;
