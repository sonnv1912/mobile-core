import type { SvgType } from '@assets/svg';
import { Media } from '@components/ui/media';
import type { MediaProps } from '@packages/types';
import clsx from 'clsx';

type Props = {
   className?: string;
   value?: string;
   placeholder?: string;
   leftIcon?: MediaProps<SvgType>;
   rightIcon?: MediaProps<SvgType>;
};

export const Input = ({
   leftIcon,
   rightIcon,
   placeholder,
   value,
   className,
}: Props) => {
   return (
      <div
         className={clsx(
            'bg-background rounded-full h-10 px-3 border border-divider',
            'flex items-center gap-2',
            className,
         )}
      >
         {leftIcon && <Media {...leftIcon} size={20} />}

         <input
            type='text'
            value={value}
            placeholder={placeholder}
            className='flex-1 h-full outline-none text-sm'
         />
      </div>
   );
};
