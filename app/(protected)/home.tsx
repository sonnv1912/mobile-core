import { Screen } from '@components/ui/screen';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { Text } from 'react-native';

export default () => {
   return (
      <Screen className='justify-center items-center'>
         <Text>Try edit ./app/(protected)/home.tsx</Text>

         <DrawerToggleButton />
      </Screen>
   );
};
