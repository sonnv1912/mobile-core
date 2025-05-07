import { Button } from '@components/form/button';
import { Input } from '@components/form/input';
import { Breadcrumb } from '@components/ui/breadcrumb';
import clsx from 'clsx';

export const Header = () => {
   return (
      <div className='bg-box-primary p-5 border-b border-divider'>
         <div
            className={clsx(
               'hidden items-center justify-between mb-5',
               'md:flex',
            )}
         >
            <Breadcrumb />

            <Button
               scheme='gray'
               variant='outline'
               leftIcon={{
                  name: 'FluentStar24Regular',
               }}
               content='Go Pro'
            />
         </div>

         <div className='flex items-center justify-between gap-2 flex-wrap'>
            <p className='text-2xl text-t-strong font-bold'>Home</p>

            <div className='flex items-center gap-2'>
               <Input
                  leftIcon={{
                     name: 'SiSearchLine',
                  }}
                  placeholder='Search  ...'
               />

               <Button
                  variant='outline'
                  scheme='gray'
                  leftIcon={{
                     name: 'LucideHardDriveUpload',
                  }}
               />

               <Button
                  variant='outline'
                  scheme='gray'
                  leftIcon={{
                     name: 'CiSettingsFilled',
                  }}
               />
            </div>
         </div>
      </div>
   );
};
