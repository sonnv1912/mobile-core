'use client';

import type { RouteStackParams } from '@configs/route';
import { useGetFile } from '@packages/hooks/query';
import { useParams, useRouter } from 'next/navigation';
import { fileIcon, formatBytes, isImage } from '@packages/utils';
import { env } from '@packages/configs';
import clsx from 'clsx';
import { Media } from '@components/ui/media';
import moment from 'moment';

export const FileDetailPage = () => {
   const router = useRouter();
   const params = useParams<RouteStackParams['fileDetail']>();
   const fileQuery = useGetFile(params?.id);

   return (
      <>
         <div
            className='fixed top-0 right-0 bottom-0 left-0 bg-black/40 z-30 overflow-auto'
            onClick={() => {
               router.back();
            }}
         />

         <div
            className={clsx(
               'fixed top-0 bottom-0 right-0 w-80 bg-white z-50 p-4',
               'flex flex-col gap-6',
            )}
         >
            <div>
               <div className='py-2 mb-6 border-b border-b-divider'>
                  <p className='text-t-strong font-bold'>File Detail</p>
               </div>

               <div className='border border-divider rounded-3xl overflow-hidden bg-box-primary'>
                  <div className='w-full h-72'>
                     {isImage(fileQuery.data?.data) ? (
                        <img
                           alt=''
                           src={`${env.BASE_URL}/assets/${fileQuery.data?.data.id}`}
                           className='size-full object-cover'
                        />
                     ) : (
                        fileIcon(fileQuery.data?.data)
                     )}
                  </div>

                  <div className='p-2 border-t border-t-divider'>
                     <p className='text-xs font-semibold overflow-ellipsis overflow-hidden whitespace-nowrap'>
                        {fileQuery.data?.data.title}
                     </p>
                  </div>
               </div>
            </div>

            <div>
               <div className='py-2 mb-6 border-b border-b-divider'>
                  <p className='text-t-strong font-bold'>File Overview</p>
               </div>

               <div className='flex flex-col gap-3 text-sm'>
                  <div className='flex items-center gap-1'>
                     <Media name='MaterialSymbolsSdCard' size={20} />

                     <p className='flex-1 text-t-strong'>File Size</p>

                     <p>{formatBytes(fileQuery.data?.data.filesize)}</p>
                  </div>
                  <div className='flex items-center gap-1'>
                     <Media name='MaterialSymbolsCalendarToday' size={20} />

                     <p className='flex-1 text-t-strong'>Date Added</p>

                     <p>
                        {moment(fileQuery.data?.data.uploaded_on).format(
                           'DD/MM/YYYY',
                        )}
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};
