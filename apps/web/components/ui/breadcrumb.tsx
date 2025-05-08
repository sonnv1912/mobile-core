'use client';

import type { SvgType } from '@assets/svg/_index';
import { Button } from '@components/form/button';
import type { MediaProps, Option } from '@packages/types';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

export const Breadcrumb = () => {
   const pathname = usePathname();

   const items = useMemo(() => {
      const data = pathname === '/' ? [''] : pathname?.split('/') || [];

      const result: Option<string, MediaProps<SvgType>, string>[] = [
         {
            code: 'home',
            href: '/',
            icon: {
               name: 'MingcuteHome2Fill',
            },
            label: 'Home',
         },
      ];

      if (data.length > 1) {
         result.push({
            code: 'arrow_home',
            icon: {
               name: 'IcRoundChevronRight',
            },
         });

         for (let index = 1; index < data.length; index++) {
            const path = data[index];

            result.push({
               code: pathname?.slice(index) || path,
               label: path,
               href: `${pathname?.slice(0, pathname.lastIndexOf(`/${path}`))} /${path}`,
            });

            if (index > 0 && index < data.length - 1) {
               result.push({
                  code: `arrow_${data}`,
                  label: path,
                  icon: {
                     name: 'IcRoundChevronRight',
                  },
               });
            }
         }
      }

      return result;
   }, [pathname]);

   return (
      <div className='flex items-center gap-2'>
         {items.map((item, index) => (
            <Button
               key={item.code}
               size='sm'
               href={item.href}
               scheme={
                  item.code === 'home' || item.code === pathname?.slice(index)
                     ? 'primary'
                     : 'gray'
               }
               variant='transparent'
               content={item.label}
               leftIcon={{
                  name: item.icon?.name,
               }}
            />
         ))}
      </div>
   );
};
