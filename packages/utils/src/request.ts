import queryString from 'query-string';

type Props = {
   endpoint: string;
   options: {
      method: 'GET' | 'POST' | 'PUT' | 'DELETE';
      body?: object;
      params?: object;
      token?: string;
   };
};

export const request = async <T>({ endpoint, options }: Props) => {
   const params = options.params
      ? `?${queryString.stringify(options.params)}`
      : '';

   const body = options?.body ? JSON.stringify(options.body) : undefined;

   const response = await fetch(endpoint + params, {
      method: 'GET',
      body,
      headers: {
         'Content-Type': 'application/json',
         Authorization: options.token
            ? `Authorization': 'Bearer ${options.token}`
            : undefined,
      },
   });

   let result: T | null = null;

   try {
      result = await response.json();
   } catch (_) {
      //
   }

   return result;
};
