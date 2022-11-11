import { GetServerSideProps, GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next';
import Head from 'next/head';

import { chatsList } from '../constants/chats';
import { useDarkMode } from '../hooks/useDarkMode';
import s from './index.module.scss';

export default function Chat({ currentChat }: any) {
  const { isDark, toggleDark } = useDarkMode();

  return (
    <>
      <Head>
        <title>{currentChat.title}</title>
      </Head>

      <div className={s.container}>
        <h1 className={s.title}>{currentChat.title}</h1>
        <p className={s.description}>Demo chat text</p>
        <button type='button' className={s.button} onClick={toggleDark}>
          switch to {isDark ? 'light mode' : 'dark mode'}
        </button>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths: GetStaticPathsResult['paths'] = chatsList.slice(1).map(chatItem => ({
    params: {
      id: chatItem.path,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = context => {
  const id = context.params?.id as string;
  const currentChat = chatsList.find(chat => chat.path === id);

  return {
    props: {
      currentChat,
    },
  };
};

// export const getServerSideProps: GetServerSideProps = async context => {
//   const id = context.query.id as string | undefined;
//   const currentChat = chatsList.find(chat => chat.path === id);
//   if (!currentChat) {
//     return {
//       notFound: true,
//     };
//   }
//   return {
//     props: {
//       currentChat,
//     },
//   };
// };
