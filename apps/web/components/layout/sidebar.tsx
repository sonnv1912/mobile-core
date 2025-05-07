import type { SidebarItemType } from '#types/sidebar';
import { Logo } from '@components/ui/logo';
import { SidebarItem } from './sidebar-item';
import clsx from 'clsx';
import { ProfilePreview } from '@components/ui/profile-preview';

export const Sidebar = () => {
   const items: SidebarItemType[] = [
      {
         code: 'home',
         label: 'Home',
         icon: 'MingcuteHome2Fill',
      },
      {
         code: 'settings',
         label: 'Settings',
         icon: 'CiSettingsFilled',
      },
   ];

   return (
      <div
         className={clsx(
            'flex flex-col p-4 w-80 border-r border-divider h-screen',
            'bg-background overflow-auto',
         )}
      >
         <div className='mb-6'>
            <Logo />
         </div>

         <div className='flex-1 flex flex-col gap-4'>
            {items.map((item) => (
               <SidebarItem key={item.code} data={item} />
            ))}
         </div>

         <ProfilePreview />
      </div>
   );
};
