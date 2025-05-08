import { Button } from '@components/form/button';
import { View } from 'react-native';
import { Media } from './media';
import { Typography } from './typography';

export const ProfilePreview = () => {
   return (
      <Button className='flex-row items-center gap-2'>
         <Media name='IconamoonProfileCircleFill' className='size-12' />

         <View className='flex-1 gap-1'>
            <Typography>Welcome</Typography>

            <Typography className='text-lg font-bold'>404 Not Found</Typography>
         </View>

         <Media name='SolarBellBingBold' className='size-8' />
      </Button>
   );
};
