import type { ExpoConfig, ConfigContext } from 'expo/config';

// Create an app icon with the following figma design:
// https://www.figma.com/design/XW9vFyvk5OueSJXLa4H8M6/Expo-App-Icon---Splash-v2--Community---Community-?node-id=0-1&p=f&t=6rfadQOfAEbTIIaG-0

const VERSION_NUMBER = '1.0.0';
const APP_ID = 'com.anonymous.newapp';
const IOS_APP_ICON = './assets/images/ios-app-icon.png';
const ANDROID_APP_ICON = './assets/images/android-app-icon.png';
const SPLASH_ICON = './assets/images/splash.png';

export default (_: ConfigContext): ExpoConfig => {
   return {
      name: 'new-app',
      slug: 'new-app',
      version: VERSION_NUMBER,
      orientation: 'portrait',
      scheme: 'myapp',
      userInterfaceStyle: 'automatic',
      newArchEnabled: true,
      ios: {
         bundleIdentifier: APP_ID,
         icon: IOS_APP_ICON,
         supportsTablet: true,
      },
      android: {
         package: APP_ID,
         icon: ANDROID_APP_ICON,
      },
      plugins: [
         'expo-router',
         'react-native-edge-to-edge',
         [
            'expo-splash-screen',
            {
               image: SPLASH_ICON,
               imageWidth: 200,
               resizeMode: 'contain',
               backgroundColor: '#ffffff',
            },
         ],
      ],
      experiments: {
         typedRoutes: false,
      },
   };
};
