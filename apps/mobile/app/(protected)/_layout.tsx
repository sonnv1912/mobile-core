import { DrawerContent } from '@components/layout/drawer-content';
import Drawer from 'expo-router/drawer';

export default () => {
   return (
      <Drawer
         screenOptions={{
            headerShown: false,
            drawerType: 'front',
            drawerStatusBarAnimation: 'none',
         }}
         drawerContent={DrawerContent}
      >
         <Drawer.Screen name='home' />
      </Drawer>
   );
};
