import { Media } from '@components/ui/media';
import clsx from 'clsx';
import { type PropsWithChildren, useCallback, useMemo } from 'react';
import type { DynamicProps } from '#types/button';
import type { SvgType } from '@assets/svg';
import type { MediaProps } from '@packages/types';
import Link from 'next/link';

type Props = {
   scheme?: 'primary' | 'gray';
   variant?: 'fill' | 'outline' | 'transparent';
   rounded?: boolean;
   size?: 'sm' | 'md';
   className?: string;
   leftIcon?: MediaProps<SvgType>;
   rightIcon?: MediaProps<SvgType>;
   content?: string;
   disable?: boolean;
   fullWidth?: boolean;
   href?: string;

   onClick?: () => void;
};

export const Button = ({
   children,
   className,
   content,
   scheme = 'primary',
   size = 'md',
   variant = 'fill',
   rounded = true,
   leftIcon,
   rightIcon,
   disable,
   fullWidth,
   href,

   onClick,
}: PropsWithChildren<Props>) => {
   const Body = href ? Link : 'div';

   const buttonHeight = useMemo(() => {
      if (size === 'sm') {
         return 32;
      }

      if (size === 'md') {
         return 40;
      }

      return 48;
   }, [size]);

   const contentSize = useMemo(() => {
      if (size === 'sm') {
         return 12;
      }

      if (size === 'md') {
         return 14;
      }

      return 16;
   }, [size]);

   const iconSize = useMemo(() => {
      if (size === 'sm') {
         return 16;
      }

      if (size === 'md') {
         return 20;
      }

      return 28;
   }, [size]);

   const handleScheme = useCallback(
      ({
         content,
         button,
      }: {
         button: DynamicProps;
         content: DynamicProps;
      }) => {
         const primary = 'var(--primary)';
         const gray = 'var(--gray)';
         const white = 'white';
         const normal = 'var(--normal)';

         if (scheme === 'primary') {
            if (variant === 'fill') {
               button.style.backgroundColor = primary;

               content.style.color = white;
            }

            if (variant === 'outline') {
               button.style.border = `1px solid ${primary}`;
            }

            if (variant === 'transparent' || variant === 'outline') {
               content.style.color = primary;
            }
         }

         if (scheme === 'gray') {
            if (variant === 'fill') {
               button.style.backgroundColor = gray;

               content.style.color = normal;
            }

            if (variant === 'outline') {
               button.style.border = `1px solid ${gray}`;
            }

            if (variant === 'transparent' || variant === 'outline') {
               content.style.color = normal;
            }
         }

         if (variant === 'transparent') {
            button.style.padding = 0;
            button.style.backgroundColor = 'transparent';
            button.style.height = 'fit-content';
            button.style.width = 'fit-content';
            button.style.borderRadius = 0;
         }

         return { button, content };
      },
      [scheme, variant],
   );

   const dynamicProps = useMemo(() => {
      const button: DynamicProps = {
         className: '',
         style: {
            height: buttonHeight,
            width: content
               ? fullWidth
                  ? 'initial'
                  : 'fit-content'
               : buttonHeight,
            borderRadius: rounded ? 9999 : 8,
         },
      };

      const contentProps: DynamicProps = {
         className: '',
         style: {
            textAlign: leftIcon || rightIcon ? 'left' : 'center',
            fontSize: contentSize,
         },
      };

      const propsByScheme = handleScheme({
         button,
         content: contentProps,
      });

      return propsByScheme;
   }, [
      buttonHeight,
      leftIcon,
      rightIcon,
      handleScheme,
      contentSize,
      content,
      fullWidth,
      rounded,
   ]);

   return (
      <Body
         href={href || '#'}
         className={clsx(
            'flex items-center gap-1.5 font-semibold',
            'border border-transparent hover:grayscale-25',
            className,
            dynamicProps.button.className,
            {
               'px-3': content,
               'justify-center': !content,
               'cursor-not-allowed': disable,
               'cursor-pointer': !disable,
            },
         )}
         style={dynamicProps.button.style}
         onClick={onClick}
      >
         {children ? (
            children
         ) : (
            <>
               {leftIcon?.name && (
                  <Media
                     className={leftIcon.className}
                     name={leftIcon.name}
                     size={leftIcon.size || iconSize}
                     color={leftIcon.color || dynamicProps.content.style.color}
                  />
               )}

               {content && (
                  <p
                     className={clsx('flex-1', dynamicProps.content.className)}
                     style={dynamicProps.content.style}
                  >
                     {content}
                  </p>
               )}
            </>
         )}
      </Body>
   );
};
