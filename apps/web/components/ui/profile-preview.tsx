import { Media } from './media';

export const ProfilePreview = () => {
   return (
      <div className='flex items-center gap-3 border-t border-divider pt-4'>
         <div className='size-10 rounded-full border border-divider flex items-center justify-center'>
            <Media name='SolarUserBold' size={28} />
         </div>

         <div className='flex-1'>
            <p className='text-t-strong font-semibold'>404 Not Found</p>

            <p className='text-sm'>Basic Member</p>
         </div>

         <Media
            name='MaterialSymbolsLogoutRounded'
            color='var(--text-normal)'
         />
      </div>
   );
};
