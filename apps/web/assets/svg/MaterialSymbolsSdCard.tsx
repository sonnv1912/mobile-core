import type { MediaProps } from '@packages/types';

export function MaterialSymbolsSdCard(props: MediaProps) {
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={props.size}
         height={props.size}
         viewBox='0 0 24 24'
      >
         {/* Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE */}
         <title>MaterialSymbolsSdCard</title>
         <path
            fill={props.color}
            d='M6 22q-.825 0-1.412-.587T4 20V8l6-6h8q.825 0 1.413.588T20 4v16q0 .825-.587 1.413T18 22zm3-11h2V7H9zm3 0h2V7h-2zm3 0h2V7h-2z'
         />
      </svg>
   );
}
