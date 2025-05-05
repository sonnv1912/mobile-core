import { theme } from '@configs/theme';
import { useAppStore } from '@hooks/stores/use-app-store';
import type { PropsWithChildren } from 'react';
import { View } from 'react-native';
import { SystemBars } from 'react-native-edge-to-edge';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const DefaultLayout = ({ children }: PropsWithChildren) => {
   const colorMode = useAppStore((state) => state.colorMode);

   return (
      <SafeAreaProvider>
         <View
            style={[
               theme.default[colorMode],
               {
                  flexGrow: 1,
               },
            ]}
         >
            <SystemBars style='auto' />

            {children}
         </View>
      </SafeAreaProvider>
   );
};
