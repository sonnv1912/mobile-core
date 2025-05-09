import { Media } from '@components/ui/media';
import { useAppStore } from '@packages/hooks/stores';
import { Tabs } from 'expo-router';

export default () => {
   const colorPallet = useAppStore((state) => state.colorPallet);

   return (
      <Tabs screenOptions={{ headerShown: false }}>
         <Tabs.Screen
            name='index'
            options={{
               title: 'Home',
               tabBarActiveTintColor: colorPallet.primary,
               tabBarInactiveTintColor: colorPallet['t-muted'],
               tabBarIcon: ({ focused }) => (
                  <Media
                     className='size-7'
                     name='MingcuteHome2Fill'
                     color={
                        focused ? colorPallet.primary : colorPallet['t-muted']
                     }
                  />
               ),
            }}
         />

         <Tabs.Screen
            name='profile'
            options={{
               title: 'Profile',
               tabBarActiveTintColor: colorPallet.primary,
               tabBarInactiveTintColor: colorPallet['t-muted'],
               tabBarIcon: ({ focused }) => (
                  <Media
                     className='size-7'
                     name='SolarUserBold'
                     color={
                        focused ? colorPallet.primary : colorPallet['t-muted']
                     }
                  />
               ),
            }}
         />

         <Tabs.Screen
            name='settings'
            options={{
               title: 'Settings',
               tabBarActiveTintColor: colorPallet.primary,
               tabBarInactiveTintColor: colorPallet['t-muted'],
               tabBarIcon: ({ focused }) => (
                  <Media
                     className='size-7'
                     name='CiSettingsFilled'
                     color={
                        focused ? colorPallet.primary : colorPallet['t-muted']
                     }
                  />
               ),
            }}
         />
      </Tabs>
   );
};
