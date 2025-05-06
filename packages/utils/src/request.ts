import queryString from 'query-string';
import type { RequestProps } from '@packages/types';

export const request = async <T>({ endpoint, options }: RequestProps) => {
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
