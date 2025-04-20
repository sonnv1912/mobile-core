import '../assets/styles/main.css';
import '../configs/i18n/index';

import { ToastManager } from '@components/ui/toast-manager';
import { queryClient } from '@configs/query-client';
import { DefaultLayout } from '@layouts/default/default-layout';
import { QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';

export default function RootLayout() {
   return (
      <DefaultLayout>
         <QueryClientProvider client={queryClient}>
            <Stack
               screenOptions={{
                  headerShown: false,
               }}
            />

            <ToastManager />
         </QueryClientProvider>
      </DefaultLayout>
   );
}
