import { asset } from '@configs/asset';
import { useAppStore } from '@packages/hooks/stores';
import clsx from 'clsx';
import { Image, type ImageStyle } from 'react-native';

type Props = {
   name: keyof typeof asset;
   className?: string;
   color?: string;
   style?: ImageStyle;
};

export const Media = ({ name, className, color }: Props) => {
   const colorPallet = useAppStore((state) => state.colorPallet);

   return (
      <Image
         source={asset[name]}
         tintColor={color || colorPallet['t-normal']}
         className={clsx(className)}
      />
   );
};
