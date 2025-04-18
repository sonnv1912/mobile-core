import { theme } from '@configs/theme';
import { useAppStore } from '@hooks/stores/use-app-store';
import type { PropsWithChildren } from 'react';
import { View } from 'react-native';

export const DefaultLayout = ({ children }: PropsWithChildren) => {
   const colorMode = useAppStore((state) => state.colorMode);

   return <View style={theme.default[colorMode]}>{children}</View>;
};
