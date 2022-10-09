import '../styles/globals.css';
import type { AppLayoutProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import React, { useEffect } from 'react';
import type { User } from '~/model/user';
import { AuthProvider } from '~/utils/AuthProvider';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  const [user, setUser] = React.useState<User | null>(null);

  useEffect(() => {
    console.log(user, setUser);
  }, [user]);

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
