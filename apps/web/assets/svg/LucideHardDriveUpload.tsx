import type { MediaProps } from '@packages/types';

export function LucideHardDriveUpload(props: MediaProps) {
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={props.size}
         height={props.size}
         viewBox='0 0 24 24'
      >
         {/* Icon from Lucide by Lucide Contributors - https://github.com/lucide-icons/lucide/blob/main/LICENSE */}
         <title>LucideHardDriveUpload</title>
         <g
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
         >
            <path d='m16 6l-4-4l-4 4m4-4v8' />
            <rect width='20' height='8' x='2' y='14' rx='2' />
            <path d='M6 18h.01M10 18h.01' />
         </g>
      </svg>
   );
}
