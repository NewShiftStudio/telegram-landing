import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next';
import Head from 'next/head';

import { MessagesList } from 'components/MessagesList/MessagesList';

import { chatsList } from '../constants/chats';

export default function Chat({ currentChat }: any) {
  return (
    <>
      <Head>
        <title>{currentChat.title} | New Shift — разработка сайтов, сервисов, приложений, чат-ботов в СПб</title>
      </Head>

      <MessagesList messages={[]} />
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
