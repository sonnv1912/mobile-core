import enCommon from './locales/en/common.json';
import { initI18n } from '@packages/configs';

const resources = {
   en: {
      common: enCommon,
   },
};

const i18n = initI18n(resources);

export default i18n;
