import Head from 'next/head';

import { AppLayout } from 'layouts/AppLayout/AppLayout';

import { MessagesList } from 'components/MessagesList/MessagesList';

import type { Chat } from 'types/Chat';

import { useRouterLoading } from 'hooks/useRouterLoading';

export default function Home() {
  const { isLoading } = useRouterLoading();
  return (
    <>
      <Head>
        <title>Админка</title>
      </Head>

      <AppLayout chatsList={[]}>
        <MessagesList isLoading={isLoading} messages={[]} />
      </AppLayout>
    </>
  );
}
