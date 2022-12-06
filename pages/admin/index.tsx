import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactElement, useEffect } from 'react';

import { AuthProvider } from 'contexts/authContext';

import { AdminLayout } from 'layouts/AdminLayout/AdminLayout';

import { MessagesList } from 'components/MessagesList/MessagesList';

import { useAuth } from 'hooks/useAuth';

function Admin() {
  const router = useRouter();
  const { isAuth, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !isAuth) {
      router.push('/admin/auth');
    }
  }, [isAuth, isLoading, router]);

  if (isLoading) return <p>Загрузка...</p>;

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

Admin.getLayout = function getLayout(page: ReactElement) {
  return <AuthProvider>{page}</AuthProvider>;
};

export default Admin;
