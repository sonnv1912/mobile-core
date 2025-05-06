import { Media } from './media';

export const Logo = () => {
   return (
      <div className='flex items-center gap-1'>
         <Media name='FluentColorDocumentFolder16' size={32} />

         <p className='font-bold text-t-strong'>Sortify</p>
      </div>
   );
};
