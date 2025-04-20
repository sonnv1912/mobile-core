import { Button } from '@components/ui/button';
import { Screen } from '@components/ui/screen';
import { Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Toast } from 'toastify-react-native';

export default function Index() {
   const { t } = useTranslation();

   return (
      <Screen>
         <Text>{t('common:hi')}</Text>

         <Button
            content='click me'
            onPress={() => {
               Toast.show({
                  text1: 'Hello',
                  text2: 'Welcome back',
                  type: 'warn',
               });
            }}
         />
      </Screen>
   );
}
