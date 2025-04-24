import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import RNToastManager from 'toastify-react-native';
import type {
   ToastConfig,
   ToastConfigParams,
} from 'toastify-react-native/utils/interfaces';

const ToastByType = ({ text1, type }: ToastConfigParams) => {
   const color = {
      success: 'bg-green-500',
      error: 'bg-red-500',
      warn: 'bg-yellow-500',
      info: 'bg-blue-500',
      default: 'bg-black',
   };

   return (
      <View
         className={`${color[type || 'default']} px-3 py-2 rounded-lg gap-2`}
      >
         <Text className='text-white font-semibold'>{text1}</Text>
      </View>
   );
};

export const Toast = () => {
   const insets = useSafeAreaInsets();

   const config: ToastConfig = {
      success: ToastByType,
      error: ToastByType,
      warn: ToastByType,
      info: ToastByType,
      default: ToastByType,
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
