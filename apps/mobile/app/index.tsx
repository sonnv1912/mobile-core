import { routes } from '@configs/routes';
import { Redirect } from 'expo-router';

export default () => {
   // if (!loggedIn) {
   //    return <Redirect href={routes.home.path} />;
   // }

   // return <Redirect href={routes.login.path} />;

   return <Redirect href={routes.home.path} />;
};
