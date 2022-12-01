import { useRouter } from 'next/router';
import { ReactNode, useContext } from 'react';
import { useQuery } from 'react-query';

import { authApi } from 'api/authApi';
import { AuthContext } from 'contexts/authContext';

import { AdminLayout } from 'layouts/AdminLayout/AdminLayout';

type Props = {
  children: ReactNode;
};

export const PrivateLayout = ({ children }: Props) => {
  const router = useRouter();
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery<Response, unknown, void>('current-user', () => authApi.getCurrentUser());
  const { isAuth, setIsAuth } = useContext(AuthContext);

  if (isLoading) return <p>Загрузка...</p>;

  if (!isLoading && user) setIsAuth(true);

  if (isError || !isAuth) {
    setIsAuth(false);
    router.push('/admin/signin');
    return null;
  }

  return <AdminLayout>{children}</AdminLayout>;
};
