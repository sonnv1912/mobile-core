import { colorPallet } from '@configs/theme';
import { TextInput, View } from 'react-native';
import { Media } from './media';
import type { assets } from '@configs/asset';

type Props = {
   placeholder?: string;
   leftIcon?: keyof typeof assets;
   rightIcon?: keyof typeof assets;
};

export const Input = ({ placeholder, leftIcon, rightIcon }: Props) => {
   return (
      <View className='min-h-14 bg-white border border-gray-200 flex-row gap-2 px-3 rounded-lg'>
         {leftIcon && <Media name={leftIcon} className='mt-4' />}

         <TextInput
            placeholder={placeholder}
            className='flex-1 text-black py-4 leading-7'
            cursorColor={colorPallet.primary[500]}
            placeholderTextColor={colorPallet.primary[300]}
            multiline={true}
         />

         {rightIcon && <Media name={rightIcon} className='mt-4' />}
      </View>
   );
};
