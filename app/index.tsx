import { Screen } from '@components/ui/screen';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native';

export default function Index() {
   const { t } = useTranslation();

   return (
      <Screen>
         <Text>{t('common:hi')}</Text>
      </Screen>
   );
}
