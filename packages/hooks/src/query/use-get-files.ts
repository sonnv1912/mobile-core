import { endpoint, queryKey } from '@packages/configs';
import { useQuery } from '@tanstack/react-query';
import { request } from '@packages/utils';
import type { FileType } from '@packages/types/data';
import type { Response } from '@packages/types';

export const useGetFiles = () => {
   return useQuery({
      queryKey: queryKey.files.list(),
      queryFn: async () => {
         const response = await request<Response<FileType[]>>({
            endpoint: endpoint.files,
            options: {
               method: 'GET',
            },
         });

         return response;
      },
   });
};
