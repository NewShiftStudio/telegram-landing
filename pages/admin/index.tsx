import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { AdminLayout } from 'layouts/AdminLayout/AdminLayout';

import { MessagesList } from 'components/MessagesList/MessagesList';

import { useAuth } from 'hooks/useAuth';

function Admin() {
  const router = useRouter();
  const { isAuth, loading } = useAuth();

  useEffect(() => {
    if (!isAuth) {
      router.push('/admin/auth');
    }
  }, [isAuth, router]);

  if (loading) return <p>Загрузка...</p>;

  if (!isAuth) {
    return null;
  }

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

export default Admin;
