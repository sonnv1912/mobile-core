import { useAppStore } from '@packages/hooks/stores';
import clsx from 'clsx';
import type { PropsWithChildren } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
   showInsetBottom?: boolean;
   className?: string;
   statusBarClassName?: string;
};

export const Screen = ({
   showInsetBottom = true,
   children,
   statusBarClassName,
   className,
}: PropsWithChildren<Props>) => {
   const insets = useSafeAreaInsets();
   const colorPallet = useAppStore((state) => state.colorPallet);

   return (
      <>
         <View
            className={statusBarClassName}
            style={{
               height: insets.top,
               backgroundColor: colorPallet.primary,
            }}
         />

         <View className={clsx('flex-1 p-4 bg-white', className)}>
            {children}
         </View>

         {showInsetBottom && (
            <View
               style={{
                  height: insets.bottom,
               }}
            />
         )}
      </>
   );
};
