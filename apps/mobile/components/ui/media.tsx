import { icon } from '@assets/icon';
import { assets } from '@configs/assets';
import clsx from 'clsx';
import { Image, type ImageStyle } from 'react-native';

type Props = {
   name: keyof typeof assets;
   className?: string;
   color?: string;
   style?: ImageStyle;
};

export const Media = ({ name, className, color }: Props) => {
   return (
      <Image
         source={assets[name]}
         tintColor={color}
         className={clsx(className, {
            'size-6': !!icon?.[name as keyof typeof icon],
         })}
      />
   );
};
