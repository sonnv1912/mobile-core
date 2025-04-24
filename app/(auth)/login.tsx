import { Input } from '@components/ui/input';
import { Screen } from '@components/ui/screen';
import { ScrollView } from '@components/ui/scroll-view';
import { Text } from 'react-native';

export default () => {
   return (
      <Screen>
         <ScrollView>
            <Text>Try edit ./app/(auth)/login.tsx</Text>

            <Input placeholder='Type me' />
         </ScrollView>
      </Screen>
   );
};
