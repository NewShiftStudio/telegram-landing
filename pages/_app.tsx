import type { AppProps } from 'next/app';

import { ThemeProvider } from 'contexts/themeContext';

import { AppLayout } from '../layouts/AppLayout/AppLayout';
import '../styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='w-screen h-screen flex'>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}
