import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next';
import Head from 'next/head';

import { chatsList } from '../constants/chats';
import { useDarkMode } from '../hooks/useDarkMode';
import s from './index.module.scss';

export default function Home({ mainChat }: any) {
  return (
    <>
      <Head>
        <title>New Shift — разработка сайтов, сервисов, приложений, чат-ботов в СПб</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={s.container}>
        <h1 className={s.title}>{mainChat.title}</h1>
        <p className={s.description}>This next app user tailwind with module scss</p>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = context => {
  const currentChat = chatsList[0];

  return {
    props: {
      mainChat: currentChat,
    },
  };
};
