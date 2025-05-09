import type { FileType } from '@packages/types/data';
import clsx from 'clsx';
import { useMemo } from 'react';

type Props = {
   data: FileType;
};

export const File = ({ data }: Props) => {
   const icon = useMemo(() => {
      if (!data.type) {
         return '📄';
      }

      const type = data.type.toLowerCase();

      if (type.includes('image')) {
         return '🖼️';
      }

      if (type.includes('video')) {
         return '🎞️';
      }

      if (type.includes('audio')) {
         return '🎧';
      }

      if (type.includes('pdf')) {
         return '📕';
      }

      if (type.includes('zip') || type.includes('rar')) {
         return '🗜️';
      }

      if (type.includes('excel') || type.includes('spreadsheet')) {
         return '📊';
      }

      if (type.includes('word')) {
         return '📄';
      }

      if (type.includes('powerpoint') || type.includes('presentation')) {
         return '📽️';
      }
      if (type.includes('text') || type.includes('plain')) {
         return '📃';
      }
      if (type.includes('json') || type.includes('xml')) {
         return '🧾';
      }
      if (
         type.includes('code') ||
         type.includes('javascript') ||
         type.includes('typescript')
      ) {
         return '💻';
      }

      return '📁';
   }, [data.type]);

   // const isImage = useMemo(() => {
   //    return data.type?.toLowerCase().includes('image');
   // }, [data.type]);

   // const isVideo = useMemo(() => {
   //    return data.type?.toLowerCase().includes('video');
   // }, [data.type]);

   return (
      <div
         className='border border-divider rounded-3xl overflow-hidden'
         onClick={() => {}}
      >
         <div className='h-36 flex items-center bg-box-primary justify-center'>
            {icon}
         </div>

         <p
            className={clsx(
               'p-2 break-all border-t border-t-divider text-xs font-semibold',
               'overflow-ellipsis whitespace-nowrap overflow-hidden',
            )}
         >
            {data.title}
         </p>
      </div>
   );
};
