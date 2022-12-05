import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import { CookiesProvider } from 'react-cookie';
import 'react-loading-skeleton/dist/skeleton.css';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ThemeProvider } from 'contexts/themeContext';

import 'styles/globals.scss';

const queryClient = new QueryClient();

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || (page => page);

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0' />
      </Head>
      <div className='w-screen h-screen flex'>
        <QueryClientProvider client={queryClient}>
          <CookiesProvider>
            <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
          </CookiesProvider>
        </QueryClientProvider>
      </div>
    </>
  );
}
