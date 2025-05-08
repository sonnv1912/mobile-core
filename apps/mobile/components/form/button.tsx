import clsx from 'clsx';
import { type PropsWithChildren, useCallback, useMemo } from 'react';
import { Pressable, Text } from 'react-native';

type Props = {
   color?: 'primary';
   variant?: 'filled' | 'outline' | 'transparent';
   content?: string;
   disable?: boolean;
   className?: string;

   onPress?: () => void;
};

export const Button = ({
   color = 'primary',
   variant = 'filled',
   className,
   content,
   children,
   disable,
   onPress,
}: PropsWithChildren<Props>) => {
   const handleColor = useCallback(
      (button: string[] = [''], text: string[] = ['']) => {
         if (color === 'primary') {
            if (variant === 'filled') {
               button.push('bg-[--color-primary]');

               text.push('text-white');
            }

            if (variant === 'outline') {
               button.push('border border-[--color-primary]');
            }

            if (variant === 'transparent' || variant === 'outline') {
               text.push('text-[--color-primary]');
            }
         }

         return {
            button,
            text,
         };
      },
      [color, variant],
   );

   const dynamicClassnames = useMemo(() => {
      const handledColor = handleColor(['p-2 rounded-md'], ['']);

      if (children) {
         return {
            button: '',
            text: '',
         };
      }

      if (variant === 'transparent') {
         handledColor.button = [''];
      }

      return {
         button: handledColor.button.join(' '),
         text: handledColor.text.join(' '),
      };
   }, [children, variant, handleColor]);

   return (
      <Pressable
         disabled={disable}
         className={clsx(dynamicClassnames.button, className, {
            'opacity-80': disable,
         })}
         onPress={onPress}
      >
         {children ? (
            children
         ) : (
            <Text className={dynamicClassnames.text}>{content}</Text>
         )}
      </Pressable>
   );
};
