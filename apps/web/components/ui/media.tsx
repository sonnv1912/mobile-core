import { type SvgType, svg } from '@assets/svg/_index';
import type { MediaProps } from '@packages/types';
import clsx from 'clsx';

export const Media = ({
   name,
   color = 'var(--text-muted)',
   size = 24,
   className,
}: MediaProps<SvgType>) => {
   const Body = name ? svg[name] : svg.MaterialSymbolsHelp;

   return (
      <div
         className={clsx(
            'flex items-center justify-center w-fit h-fit',
            className,
         )}
      >
         <Body color={color} size={size} name={name} />
      </div>
   );
};
