import type { MediaProps } from '@packages/types';

export function SiSearchLine(props: MediaProps) {
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={props.size}
         height={props.size}
         viewBox='0 0 24 24'
      >
         {/* Icon from Sargam Icons by Abhimanyu Rana - https://github.com/planetabhi/sargam-icons/blob/main/LICENSE.txt */}
         <title>SiSearchLine</title>
         <path
            fill='none'
            stroke={props.color}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeMiterlimit='10'
            strokeWidth='1.5'
            d='m21 21l-4-4m2-6a8 8 0 1 1-16 0a8 8 0 0 1 16 0'
         />
      </svg>
   );
}
