import type { IconProps } from '@packages/types';

export function SolarUserBold(props: IconProps) {
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={props.size}
         height={props.size}
         viewBox='0 0 24 24'
      >
         {/* Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ */}
         <title>SolarUserBold</title>
         <circle cx='12' cy='6' r='4' fill={props.color} />
         <path
            fill={props.color}
            d='M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5'
         />
      </svg>
   );
}
