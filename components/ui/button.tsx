import { type PropsWithChildren, useCallback, useMemo } from 'react';
import { Pressable, Text } from 'react-native';
import clsx from 'clsx';
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated';

type Props = {
   color?: 'primary';
   variant?: 'filled' | 'outline' | 'transparent';
   content?: string;
   disable?: boolean;
   className?: string;

   onPress?: () => void;
};

const colorPallet = {
   primary: '[--color-primary]',
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
   const opacity = useSharedValue(1);

   const handleColor = useCallback(
      (button: string[] = [''], text: string[] = ['']) => {
         if (color === 'primary') {
            if (variant === 'filled') {
               button.push(`bg-${colorPallet[color]}`);

               text.push('text-white');
            }

            if (variant === 'outline') {
               button.push(`border border-${colorPallet[color]}`);
            }

            if (variant === 'transparent' || variant === 'outline') {
               text.push(`text-${colorPallet[color]}`);
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
         onPressIn={() => {
            opacity.value = withTiming(0.6, {
               duration: 100,
            });
         }}
         onPressOut={() => {
            opacity.value = withTiming(1, {
               duration: 100,
            });
         }}
         onPress={onPress}
      >
         <Animated.View
            style={{
               opacity,
            }}
         >
            {children ? (
               children
            ) : (
               <Text className={dynamicClassnames.text}>{content}</Text>
            )}
         </Animated.View>
      </Pressable>
   );
};
