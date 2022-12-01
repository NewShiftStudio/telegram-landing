import Head from 'next/head';

import { AdminLayout } from 'layouts/AdminLayout/AdminLayout';

import { MessagesList } from 'components/MessagesList/MessagesList';

export default function Admin() {
  return (
    <>
      <Head>
        <title>Админка</title>
      </Head>

      <AdminLayout>
        <MessagesList messages={[]} />
      </AdminLayout>
    </>
  );
}
