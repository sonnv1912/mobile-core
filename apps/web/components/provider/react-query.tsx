'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@packages/configs';
import type { PropsWithChildren } from 'react';

export const ReactQuery = (props: PropsWithChildren) => {
   return (
      <QueryClientProvider client={queryClient}>
         {props.children}
      </QueryClientProvider>
   );
};
