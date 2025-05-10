import './globals.css';

import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import type { PropsWithChildren, ReactNode } from 'react';
import clsx from 'clsx';
import { ReactQuery } from '@components/provider/react-query';

const font = Plus_Jakarta_Sans({
   variable: '--font-plus-jakarta-sans',
   subsets: ['latin', 'vietnamese'],
});

export const metadata: Metadata = {
   title: 'Sortify: Your file manager',
   description: 'Sortify: Your file manager',
};

type Props = {
   modal?: ReactNode;
};

export default ({ children, modal }: PropsWithChildren<Props>) => {
   return (
      <html lang='en' className={clsx(font.variable, 'light')}>
         <body>
            <ReactQuery>
               {children}

               {modal}
            </ReactQuery>
         </body>
      </html>
   );
};
