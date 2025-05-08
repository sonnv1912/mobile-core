import { ProfilePreview } from '@components/ui/profile-preiview';
import { Screen } from '@components/ui/screen';

export const HomeScreen = () => {
   return (
      <Screen showInsetBottom={false}>
         <ProfilePreview />
      </Screen>
   );
};
