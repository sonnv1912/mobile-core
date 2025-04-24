import type { PropsWithChildren } from 'react';
import { ScrollView as RNScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';

export const ScrollView = ({ children }: PropsWithChildren) => {
   return (
      <KeyboardAwareScrollView
         ScrollViewComponent={RNScrollView}
         showsVerticalScrollIndicator={false}
         showsHorizontalScrollIndicator={false}
         keyboardShouldPersistTaps='handled'
         contentContainerStyle={{
            flexGrow: 1,
         }}
      >
         {children}
      </KeyboardAwareScrollView>
   );
};
