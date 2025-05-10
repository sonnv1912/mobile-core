export const route = {
   root: {
      path: '/',
      params: undefined,
   },
   home: {
      path: '/',
      params: undefined,
   },
   login: {
      path: '/login',
      params: undefined,
   },
   fileDetail: {
      path: '/file-detail',
      params: {
         id: '',
      },
   },
};

export type RouteStackParams = {
   [key in keyof typeof route]: (typeof route)[key]['params'];
};
