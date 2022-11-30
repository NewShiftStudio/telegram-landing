import { GetStaticProps } from 'next';
import Head from 'next/head';

import { AppLayout } from 'layouts/AppLayout/AppLayout';

import { MessagesList } from 'components/MessagesList/MessagesList';

import type { Chat } from 'types/Chat';

import { chatsList } from 'constants/chats';
import { useRouterLoading } from 'hooks/useRouterLoading';

type Props = {
  mainChat: Chat;
};

export default function Home({ mainChat }: Props) {
  const { isLoading } = useRouterLoading();

  return (
    <>
      <Head>
        <title>New Shift — разработка сайтов, сервисов, приложений, чат-ботов в СПб</title>
      </Head>

      <AppLayout chatsList={chatsList}>
        <MessagesList isLoading={isLoading} messages={mainChat.messages || []} />
      </AppLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const currentChat = chatsList[0];

  return {
    props: {
      mainChat: currentChat,
    },
  };
};
