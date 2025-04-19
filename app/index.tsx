import { Button } from '@components/ui/button';
import { Screen } from '@components/ui/screen';
import { Text } from 'react-native';

export default function Index() {
   return (
      <Screen>
         <Text>Edit app/index.tsx to edit this screen.</Text>

         <Button content='click me' />
      </Screen>
   );
}
