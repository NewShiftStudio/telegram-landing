import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next';
import Head from 'next/head';

import { Chat } from '../@types/Chat';
import { MessagesList } from '../components/MessagesList/MessagesList';
import { chatsList } from '../constants/chats';
import { AppLayout } from '../layouts/AppLayout/AppLayout';

type Props = {
  currentChat: Chat;
};

export default function ChatPage({ currentChat }: Props) {
  return (
    <>
      <Head>
        <title>{currentChat.title} | New Shift — разработка сайтов, сервисов, приложений, чат-ботов в СПб</title>
      </Head>

      <AppLayout>
        <MessagesList messages={currentChat.messages || []} />
      </AppLayout>
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
