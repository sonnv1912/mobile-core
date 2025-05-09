'use client';

import { File } from '@components/ui/file';
import { useGetFiles } from '@packages/hooks/query';

export const RecentFiles = () => {
   const filesQuery = useGetFiles();

   return (
      <div className='p-4 flex flex-col gap-2 mt-4'>
         <p className='font-bold text-t-strong text-lg'>Recent Files</p>

         <div className='grid grid-cols-4 gap-4'>
            {filesQuery.data?.data.map((file) => (
               <File key={file.id} data={file} />
            ))}
         </div>
      </div>
   );
};
