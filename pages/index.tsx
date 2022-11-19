import { GetStaticProps } from 'next';
import Head from 'next/head';

import { MessagesList } from 'components/MessagesList/MessagesList';

import { useRouterLoading } from 'hooks/useRouterLoading';

import { Chat } from '../@types/Chat';
import { chatsList } from '../constants/chats';

type Props = {
  mainChat: Chat;
};

export default function Home({ mainChat }: Props) {
  const { isLoading } = useRouterLoading();

  return (
    <>
      <Head>
        <title>New Shift — разработка сайтов, сервисов, приложений, чат-ботов в СПб</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <MessagesList isLoading={isLoading} messages={mainChat.messages || []} />
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
