import Head from 'next/head';

import { chatsList } from '../constants/chats';
import { useDarkMode } from '../hooks/useDarkMode';
import s from './index.module.scss';

export default function Home() {
  const { isDark, toggleDark } = useDarkMode();
  const currentChat = chatsList[0];

  return (
    <>
      <Head>
        <title>New Shift — разработка сайтов, сервисов, приложений, чат-ботов в СПб</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={s.container}>
        <h1 className={s.title}>{currentChat.title}</h1>
        <p className={s.description}>This next app user tailwind with module scss</p>
        <button type='button' className={s.button} onClick={toggleDark}>
          switch to {isDark ? 'light mode' : 'dark mode'}
        </button>
      </div>
    </>
  );
}
