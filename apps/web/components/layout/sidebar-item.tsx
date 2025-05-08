import type { SidebarItemType } from '#types/sidebar';
import { Media } from '@components/ui/media';
import clsx from 'clsx';

type Props = {
   data: SidebarItemType;
};

export const SidebarItem = ({ data }: Props) => {
   return (
      <div
         className={clsx(
            'flex items-center gap-2 border-l-4 border-transparent transition-all',
            'cursor-pointer pl-1 py-1',
            'hover:border-primary',
            'md:pl-2',
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
      </div>
   );
};
