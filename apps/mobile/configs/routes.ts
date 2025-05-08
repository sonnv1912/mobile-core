export const routes = {
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
   [key in keyof typeof routes]: (typeof routes)[key]['params'];
};
