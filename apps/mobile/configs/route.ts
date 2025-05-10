export const route = {
   root: {
      path: '(tabs)/index',
      params: undefined,
   },
   home: {
      path: '(tabs)/index',
      params: undefined,
   },
   login: {
      path: '/login',
      params: undefined,
   },
};

export type RouteStackParams = {
   [key in keyof typeof route]: (typeof route)[key]['params'];
};
