import { Toast } from '@components/ui/toast';
import { queryClient } from '@configs/query-client';
import { DefaultLayout } from '@layouts/default/default-layout';
import { QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { KeyboardProvider } from 'react-native-keyboard-controller';

import '../assets/styles/main.css';
import '../configs/i18n/index';

export default () => {
   return (
      <DefaultLayout>
         <QueryClientProvider client={queryClient}>
            <KeyboardProvider>
               <Stack
                  screenOptions={{
                     headerShown: false,
                  }}
               />

               <Toast />
            </KeyboardProvider>
         </QueryClientProvider>
      </DefaultLayout>
   );
};
