import '../styles/globals.css';
import type { AppLayoutProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import React from 'react';
import type { User } from '~/model/user';
import { AuthProvider } from '~/utils/AuthProvider';

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  const [user, setUser] = React.useState<User | null>(null);

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page: JSX.Element) => page);

  return (
    // Provide the client to your App
    <AuthProvider value={{ user, setUser }}>
      <QueryClientProvider client={queryClient}>
        {getLayout(<Component {...pageProps} />)}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default MyApp;
