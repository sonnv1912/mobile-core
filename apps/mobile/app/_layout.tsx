import { useFonts } from 'expo-font';
import { Toast } from '@components/ui/toast';
import { font } from '@configs/theme';
import { DefaultLayout } from '@layouts/default/default-layout';
import { queryClient } from '@packages/configs';
import { QueryClientProvider } from '@tanstack/react-query';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';

import '../assets/style/main.css';
import '../configs/i18n/index';
import '../gesture-handler';

SplashScreen.preventAutoHideAsync();

export default () => {
   const [loaded, error] = useFonts(font.plusJakarta);

   useEffect(() => {
      if (loaded || error) {
         SplashScreen.hideAsync();
      }
   }, [loaded, error]);

   if (!loaded && !error) {
      return null;
   }

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
