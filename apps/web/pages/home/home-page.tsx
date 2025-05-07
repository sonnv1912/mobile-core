import { Header } from '@components/layout/header';
import { Sidebar } from '@components/layout/sidebar';

export const HomePage = () => {
   return (
      <div className='flex'>
         <Sidebar />

         <div className='h-screen overflow-auto flex-1'>
            <Header />
         </div>
      </div>
   );
};
