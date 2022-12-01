import { useRouter } from 'next/router';
import { ReactNode, useContext } from 'react';
import { useQuery } from 'react-query';

import { authApi } from 'api/authApi';
import { AuthContext } from 'contexts/authContext';

import s from './AuthLayout.module.scss';

type Props = {
  children: ReactNode;
};

export const AuthLayout = ({ children }: Props) => {
  const router = useRouter();
  const { data: user, isLoading } = useQuery<Response, unknown, void>('current-user', () => authApi.getCurrentUser());
  const { isAuth, setIsAuth } = useContext(AuthContext);

  if (isLoading) return <p>Загрузка...</p>;

  if (!isLoading && user) setIsAuth(true);

  if (!isLoading && isAuth) {
    router.push('/admin');
    return null;
  }

  return <div className={s.content}>{children}</div>;
};
