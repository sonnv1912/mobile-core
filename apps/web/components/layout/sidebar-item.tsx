'use client';

import type { SidebarItemType } from '#types/sidebar';
import { Media } from '@components/ui/media';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
   data: SidebarItemType;
};

export const SidebarItem = ({ data }: Props) => {
   const pathname = usePathname();

   return (
      <Link
         href={data.href || '#'}
         className={clsx(
            'flex items-center gap-2 border-l-4 border-transparent transition-all',
            'cursor-pointer pl-1 py-1 outline-0',
            'hover:border-l-primary',
            'md:pl-2',
            {
               'border-l-primary':
                  data.href &&
                  ((pathname?.includes(data.href) && data.href !== '/') ||
                     data.href === pathname),
            },
         )}
      >
         {data.icon && <Media name={data.icon.name} />}

         <p
            className={clsx(
               'text-t-strong font-semibold text-sm hidden',
               'md:block',
            )}
         >
            {data.label}
         </p>
      </Link>
   );
};
