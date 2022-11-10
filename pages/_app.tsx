import type { AppProps } from 'next/app';
import Link from 'next/link';

import { chatsList } from '../constants/chats';
import '../styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='w-screen h-screen flex'>
      <div className='w-[30%]'>
        {chatsList.map(chat => (
          <Link key={chat.path} href={chat.path}>
            <p className='px-2 py-4 text-underline border-b-[1px] border-b-gray-600 text-gray-800'>{chat.title}</p>
          </Link>
        ))}
      </div>
      <div className='w-[70%]'>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
