export type RequestProps = {
   endpoint: string;
   options: {
      method: 'GET' | 'POST' | 'PUT' | 'DELETE';
      body?: object;
      params?: object;
      token?: string;
   };
};
