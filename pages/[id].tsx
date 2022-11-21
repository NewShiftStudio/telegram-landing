import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next';
import Head from 'next/head';

import { AppLayout } from 'layouts/AppLayout/AppLayout';

import { MessagesList } from 'components/MessagesList/MessagesList';

import type { Chat } from 'types/Chat';

import { chatsList } from 'constants/chats';
import { useRouterLoading } from 'hooks/useRouterLoading';

type Props = {
  currentChat: Chat;
};

export default function ChatPage({ currentChat }: Props) {
  const { isLoading } = useRouterLoading();

  return (
    <>
      <Head>
        <title>{currentChat.title} | New Shift — разработка сайтов, сервисов, приложений, чат-ботов в СПб</title>
      </Head>

      <AppLayout>
        <MessagesList isLoading={isLoading} messages={currentChat.messages || []} />
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
