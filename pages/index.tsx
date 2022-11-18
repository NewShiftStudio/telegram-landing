import { GetStaticProps } from 'next';
import Head from 'next/head';

import { MessagesList } from 'components/MessagesList/MessagesList';

import { Chat } from '../@types/Chat';
import { chatsList } from '../constants/chats';

type Props = {
  mainChat: Chat;
};

export default function Home({ mainChat }: Props) {
  return (
    <>
      <Head>
        <title>New Shift — разработка сайтов, сервисов, приложений, чат-ботов в СПб</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <MessagesList messages={mainChat.messages || []} />
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
