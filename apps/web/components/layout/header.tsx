import { Button } from '@components/form/button';
import { Input } from '@components/form/input';
import { Breadcrumb } from '@components/ui/breadcrumb';

export const Header = () => {
   return (
      <div className='bg-box-primary p-5 border-b border-divider'>
         <div className='flex items-center justify-between'>
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

         <div className='mt-5 flex items-center gap-2'>
            <p className='text-2xl text-t-strong font-bold flex-1'>Home</p>

            <Input
               leftIcon={{
                  name: 'SiSearchLine',
               }}
               placeholder='Search files and folders...'
               className='min-w-72'
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
   );
};
