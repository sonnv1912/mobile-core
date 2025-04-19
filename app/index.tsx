import { Button } from '@components/ui/button';
import { Screen } from '@components/ui/screen';
import { Text } from 'react-native';
import { useTranslation } from 'react-i18next';

export default function Index() {
   const { t } = useTranslation();

   return (
      <Screen>
         <Text>{t('common:hi')}</Text>

         <Button content='click me' />
      </Screen>
   );
}
