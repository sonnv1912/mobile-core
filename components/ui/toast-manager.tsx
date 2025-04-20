import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import RNToastManager from 'toastify-react-native';
import type {
   ToastConfig,
   ToastConfigParams,
} from 'toastify-react-native/utils/interfaces';

const Toast = ({ text1, type, text2 }: ToastConfigParams) => {
   const color = {
      success: 'bg-green-500',
      error: 'bg-red-500',
      warn: 'bg-yellow-500',
      info: 'bg-blue-500',
      default: 'bg-black',
   };

   return (
      <View className='px-4 w-full'>
         <View
            className={`${color[type || 'default']} w-full p-3 rounded-lg gap-2`}
         >
            <Text className='text-white font-semibold text-lg'>{text1}</Text>

            {text2 && <Text className='text-white font-semibold'>{text2}</Text>}
         </View>
      </View>
   );
};

export const ToastManager = () => {
   const insets = useSafeAreaInsets();

   const config: ToastConfig = {
      success: Toast,
      error: Toast,
      warn: Toast,
      info: Toast,
      default: Toast,
   };

   return (
      <RNToastManager
         config={config}
         position='bottom'
         animationStyle='slide'
         duration={1500}
         bottomOffset={insets.bottom + 16}
         useModal={false}
      />
   );
};
