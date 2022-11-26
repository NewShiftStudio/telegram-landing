import type { AppProps } from 'next/app';
import Head from 'next/head';
import { CookiesProvider } from 'react-cookie';
import 'react-loading-skeleton/dist/skeleton.css';

import { ThemeProvider } from 'contexts/themeContext';

import 'styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0' />
      </Head>
      <div className='w-screen h-screen flex'>
        <CookiesProvider>
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        </CookiesProvider>
      </div>
    </>
  );
}
