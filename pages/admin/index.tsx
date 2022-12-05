import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactElement, useEffect } from 'react';

import { AuthProvider } from 'contexts/authContext';

import { AdminLayout } from 'layouts/AdminLayout/AdminLayout';

import { MessagesList } from 'components/MessagesList/MessagesList';

import { useAuth } from 'hooks/useAuth';

function Admin() {
  const router = useRouter();
  const { isAuth, loading } = useAuth();

  useEffect(() => {
    if (!loading && !isAuth) {
      router.push('/admin/auth');
    }
  }, [isAuth, loading, router]);

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

Admin.getLayout = function getLayout(page: ReactElement) {
  return <AuthProvider>{page}</AuthProvider>;
};

export default Admin;
