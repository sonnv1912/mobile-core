import type { font } from '@configs/theme';
import type { PropsWithChildren } from 'react';
import { Text } from 'react-native';

type Props = {
   className?: string;
   fontWeight?: keyof (typeof font)['plusJakarta'];
};

export const Typography = ({
   children,
   className,
   fontWeight,
}: PropsWithChildren<Props>) => {
   return (
      <Text
         className={className}
         style={[
            {
               fontFamily: fontWeight || 'Regular',
            },
         ]}
      >
         {children}
      </Text>
   );
};
