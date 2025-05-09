import type { MediaProps } from '@packages/types';

export function MdiFileImageBox(props: MediaProps) {
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={props.size}
         height={props.size}
         viewBox='0 0 24 24'
      >
         {/* Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE */}
         <title>MdiFileImageBox</title>
         <path
            d='M8.5 13.498l2.5 3.006l3.5-4.506l4.5 6H5m16 1v-14a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z'
            fill={props.color}
         />
      </svg>
   );
}
