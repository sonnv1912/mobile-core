import '../assets/style/main.css';
import '../configs/i18n/index';
import '../gesture-handler';

import { Toast } from '@components/ui/toast';
import { queryClient } from '@packages/configs';
import { DefaultLayout } from '@layouts/default/default-layout';
import { QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';

export default () => {
   return (
      <GestureHandlerRootView className='flex-1'>
         <DefaultLayout>
            <QueryClientProvider client={queryClient}>
               <KeyboardProvider>
                  <Stack
                     screenOptions={{
                        headerShown: false,
                     }}
                  >
                     <Stack.Screen name='(tabs)' />
                  </Stack>

                  <Toast />
               </KeyboardProvider>
            </QueryClientProvider>
         </DefaultLayout>
      </GestureHandlerRootView>
   );
};
