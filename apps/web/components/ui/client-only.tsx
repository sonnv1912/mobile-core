'use client';

import {
   useEffect,
   useState,
   type PropsWithChildren,
   type ReactNode,
} from 'react';

type Props = {
   fallback?: ReactNode;
};

export const ClientOnly = ({
   children,
   fallback,
}: PropsWithChildren<Props>) => {
   const [isServer, setIsServer] = useState(true);

   useEffect(() => {
      setIsServer(false);
   }, []);

   if (isServer) {
      return fallback;
   }

   return children;
};
