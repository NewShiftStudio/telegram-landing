import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'react-loading-skeleton/dist/skeleton.css';

import { ThemeProvider } from 'contexts/themeContext';

import { AppLayout } from 'layouts/AppLayout/AppLayout';

import 'styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0' />
      </Head>
      <div className='w-screen h-screen flex'>
        <ThemeProvider>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </ThemeProvider>
      </div>
    </>
  );
}
