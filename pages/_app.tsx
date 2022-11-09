import type { AppProps } from 'next/app';

import { AppLayout } from '../layouts/AppLayout/AppLayout';
import '../styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='w-screen h-screen flex'>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </div>
  );
}
