import { routes } from '@configs/routes';
import { useAuthStore } from '@hooks/stores/use-auth-store';
import { Redirect } from 'expo-router';

export default () => {
   const loggedIn = useAuthStore((state) => state.loggedIn);

   if (loggedIn) {
      return <Redirect href={routes.home.path} />;
   }

   return <Redirect href={routes.login.path} />;
};
