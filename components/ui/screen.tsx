import clsx from 'clsx';
import type { PropsWithChildren } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
   className?: string;
   statusBarClassName?: string;
};

export const Screen = ({
   children,
   statusBarClassName,
   className,
}: PropsWithChildren<Props>) => {
   const insets = useSafeAreaInsets();

   return (
      <>
         <View
            className={statusBarClassName}
            style={{
               height: insets.top,
            }}
         />

         <View className={clsx('flex-1 p-4', className)}>{children}</View>

         <View
            style={{
               height: insets.bottom,
            }}
         />
      </>
   );
};
