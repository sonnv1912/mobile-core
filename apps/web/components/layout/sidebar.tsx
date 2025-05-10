'use client';

import type { SidebarItemType } from '#types/sidebar';
import { Logo } from '@components/ui/logo';
import { ProfilePreview } from '@components/ui/profile-preview';
import clsx from 'clsx';
import { useState } from 'react';
import { SidebarItem } from './sidebar-item';
import { AnimatePresence, motion, useAnimate } from 'motion/react';
import { Button } from '@components/form/button';

export const Sidebar = () => {
   const [show, setShow] = useState(false);
   const [ref, animate] = useAnimate();

   const items: SidebarItemType[] = [
      {
         code: 'home',
         label: 'Home',
         icon: {
            name: 'MingcuteHome2Fill',
         },
         href: '/',
      },
      {
         code: 'settings',
         label: 'Settings',
         icon: {
            name: 'CiSettingsFilled',
         },
         href: '/settings',
      },
   ];

   return (
      <>
         <motion.div
            ref={ref}
            className={clsx(
               'flex flex-col p-1 border-r border-divider h-screen',
               'bg-background fixed left-0 z-10 -translate-x-full',
               'md:relative md:w-80 md:p-4 md:translate-x-0',
            )}
            transition={{
               bounce: 0,
            }}
         >
            <div className='pb-2 mb-3 border-b border-divider'>
               <Logo />
            </div>

            <div className='flex-1 flex flex-col gap-4 overflow-auto'>
               {items.map((item) => (
                  <SidebarItem key={item.code} data={item} />
               ))}
            </div>

            <ProfilePreview />

            {!show && (
               <Button
                  rounded={false}
                  size='sm'
                  leftIcon={{
                     name: 'MaterialSymbolsMenuRounded',
                  }}
                  className={clsx('absolute -right-8 top-0 flex', 'md:hidden')}
                  onClick={() => {
                     setShow(true);

                     animate(ref.current, {
                        translate: 0,
                     });
                  }}
               />
            )}
         </motion.div>

         <AnimatePresence initial={false}>
            {show && (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={clsx(
                     'bg-black/40 fixed top-0 right-0 bottom-0 left-0',
                     'md:hidden',
                  )}
                  onClick={() => {
                     setShow(false);

                     animate(ref.current, {
                        translate: '-100%',
                     });
                  }}
               />
            )}
         </AnimatePresence>
      </>
   );
};
