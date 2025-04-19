import '../assets/styles/main.css';
import '../configs/i18n/index';

import { DefaultLayout } from '@layouts/default/default-layout';
import { Stack } from 'expo-router';

export default function RootLayout() {
   return (
      <DefaultLayout>
         <Stack
            screenOptions={{
               headerShown: false,
            }}
         />
      </DefaultLayout>
   );
}
