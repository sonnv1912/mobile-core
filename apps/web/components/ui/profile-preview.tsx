import clsx from 'clsx';
import { Media } from './media';
import { Button } from '@components/form/button';

export const ProfilePreview = () => {
   return (
      <div
         className={clsx(
            'flex items-center gap-2 border-t border-divider pt-2 pb-1',
            'md:pt-4 md:pb-0',
         )}
      >
         <Button
            size='sm'
            leftIcon={{
               name: 'SolarUserBold',
            }}
         />

         <div className={clsx('flex-1 hidden', 'md:block')}>
            <p className='text-t-strong text-sm font-semibold'>404 Not Found</p>

            <p className='text-xs'>Basic Member</p>
         </div>

         <Media
            name='MaterialSymbolsLogoutRounded'
            color='var(--text-normal)'
            className={clsx('hidden', 'md:flex')}
         />
      </div>
   );
};
