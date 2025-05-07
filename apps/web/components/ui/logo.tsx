import clsx from 'clsx';
import { Media } from './media';

export const Logo = () => {
   return (
      <div
         className={clsx(
            'flex items-center gap-1 justify-center',
            'md:justify-start',
         )}
      >
         <Media name='FluentColorDocumentFolder16' size={32} />

         <p className={clsx('font-bold text-t-strong hidden', 'md:block')}>
            Sortify
         </p>
      </div>
   );
};
