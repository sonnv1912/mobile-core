type Props = {
   endpoint: string;
   options: {
      method: 'GET' | 'POST' | 'PUT' | 'DELETE';
      body?: object;
      params?: object;
   };
};

export const request = async <T>({ endpoint }: Props) => {
   const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json',
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
