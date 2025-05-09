import type { MediaProps } from '@packages/types';

export function MdiFile(props: MediaProps) {
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={props.size}
         height={props.size}
         viewBox='0 0 24 24'
      >
         {/* Icon from Material Design Icons by <Pic></Pic>togrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE */}
         <title>MdiFile</title>
         <path
            fill={props.color}
            d='M13 9V3.5L18.5 9M6 2c-1.11 0-2 .89-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z'
         />
      </svg>
   );
}
