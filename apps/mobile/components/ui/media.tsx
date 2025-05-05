import { icons } from '@assets/icons';
import { assets } from '@configs/assets';
import { colorPallet } from '@configs/theme';
import clsx from 'clsx';
import { Image } from 'react-native';

type Props = {
   name: keyof typeof assets;
   className?: string;
   color?: string;
};

export const Media = ({
   name,
   className,
   color = colorPallet.primary[500],
}: Props) => {
   return (
      <Image
         source={assets[name]}
         tintColor={color}
         className={clsx(className, {
            'size-6': !!icons?.[name],
         })}
      />
   );
};
