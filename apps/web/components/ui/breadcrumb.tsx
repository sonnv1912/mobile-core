import { Button } from '@components/form/button';
import { Media } from './media';

export const Breadcrumb = () => {
   return (
      <div className='flex items-center gap-2'>
         <Button
            size='sm'
            leftIcon={{ name: 'MingcuteHome2Fill' }}
            variant='transparent'
            scheme='gray'
         />

         <Media name='IcRoundChevronRight' />

         <Button variant='transparent' scheme='gray' content='Home' />
      </div>
   );
};
