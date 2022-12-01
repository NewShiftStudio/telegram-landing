import Head from 'next/head';

import { AdminLayout } from 'layouts/AdminLayout/AdminLayout';
import { PrivateLayout } from 'layouts/PrivateLayout/PrivateLayout';

import { MessagesList } from 'components/MessagesList/MessagesList';

export default function Home() {
  return (
    <PrivateLayout>
      <Head>
        <title>Админка</title>
      </Head>
      <MessagesList messages={[]} />
    </PrivateLayout>
  );
}
