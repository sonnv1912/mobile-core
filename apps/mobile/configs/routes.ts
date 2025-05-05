export const routes = {
   root: {
      path: '/',
      params: undefined,
   },
   home: {
      path: '/home',
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
