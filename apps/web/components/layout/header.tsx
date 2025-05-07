import { Button } from '@components/form/button';
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

         <div className='mt-5'>
            <p className='text-2xl text-t-strong font-bold'>Home</p>
         </div>
      </div>
   );
};
