import { Button } from '@components/ui/button';
import { Text, View } from 'react-native';

export default function Index() {
   return (
      <View
         style={{
            justifyContent: 'center',
            alignItems: 'center',
         }}
      >
         <Text>Edit app/index.tsx to edit this screen.</Text>

         <Button content='click me' />
      </View>
   );
}
