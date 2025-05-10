import { route } from '@configs/route';
import type { FileType } from '@packages/types/data';
import { fileIcon } from '@packages/utils';
import clsx from 'clsx';
import Link from 'next/link';

type Props = {
   data?: FileType;
};

export const File = ({ data }: Props) => {
   return (
      <Link
         href={`${route.fileDetail.path}/${data?.id}`}
         className='border border-divider rounded-3xl overflow-hidden'
         scroll={false}
      >
         <div className='h-36 flex items-center bg-box-primary justify-center text-3xl'>
            {fileIcon(data)}
         </div>

         <p
            className={clsx(
               'p-2 break-all border-t border-t-divider text-xs font-semibold',
               'overflow-ellipsis whitespace-nowrap overflow-hidden',
            )}
         >
            {data?.title}
         </p>
      </Link>
   );
};
