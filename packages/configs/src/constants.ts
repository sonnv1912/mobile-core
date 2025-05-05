export const IS_WEB =
   typeof window !== 'undefined' && typeof document !== 'undefined';

export const IS_MOBILE = !IS_WEB;
