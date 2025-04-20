import { queryClient } from '@configs/query-client';
import { QueryClientProvider } from '@tanstack/react-query';
import { DefaultLayout } from '@layouts/default/default-layout';
import { Stack } from 'expo-router';

import '../assets/styles/main.css';
import '../configs/i18n/index';

export default function RootLayout() {
   return (
      <DefaultLayout>
         <QueryClientProvider client={queryClient}>
            <Stack
               screenOptions={{
                  headerShown: false,
               }}
            />
         </QueryClientProvider>
      </DefaultLayout>
   );
}
