import type { MediaProps } from '@packages/types';

export function MaterialSymbolsCalendarToday(props: MediaProps) {
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={props.size}
         height={props.size}
         viewBox='0 0 24 24'
      >
         {/* Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE */}
         <title>MaterialSymbolsCalendarToday</title>
         <path
            fill={props.color}
            d='M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5z'
         />
      </svg>
   );
}
