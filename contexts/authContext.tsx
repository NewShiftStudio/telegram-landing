import { useRouter } from 'next/router';
import React, { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';

import { SignInDto, authApi } from 'https/auth';

import { ResponseError } from 'types/ResponseError';

type AuthContextType = {
  isAuth: boolean;
  currentUser?: any;
  loading: boolean;
  signout: () => void;
  signin: (data: SignInDto) => void;
};

type Props = {
  children: ReactNode;
};

export const AuthContext = React.createContext({} as AuthContextType);

export const AuthProvider = ({ children }: Props) => {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const onSuccessGetCurrentUser = () => {
    setIsAuth(true);
  };

  const onErrorGetCurrentUser = () => {
    setIsAuth(false);
    router.push('/admin/auth');
  };

  const onSuccessSigin = () => {
    setIsAuth(true);
    router.push('/admin');
  };

  const onSuccessSignout = () => {
    setIsAuth(false);
    router.push('/admin/auth');
  };

  const { data: currentUser, isLoading: isGetUsersLoading } = useQuery('current-user', () => authApi.getCurrentUser(), {
    onSuccess: onSuccessGetCurrentUser,
    onError: onErrorGetCurrentUser,
    retry: false,
  });

  const { isLoading: isSigninLoading, ...signinMutation } = useMutation<unknown, ResponseError, SignInDto, unknown>(
    data => authApi.signin(data),
    {
      onSuccess: onSuccessSigin,
    },
  );
  const { isLoading: isSignoutLoading, ...signoutMutation } = useMutation<unknown, ResponseError, void, unknown>(
    () => authApi.signout(),
    {
      onSuccess: onSuccessSignout,
    },
  );

  useEffect(() => {
    setLoading(isGetUsersLoading || isSigninLoading || isSignoutLoading);
  }, [isGetUsersLoading, isSigninLoading, isSignoutLoading]);

  const signin = useCallback(signinMutation.mutate, [signinMutation]);
  const signout = useCallback(signoutMutation.mutate, [signoutMutation]);

  const auth = useMemo(
    () => ({
      isAuth,
      currentUser,
      loading,
      signin,
      signout,
    }),
    [isAuth, currentUser, signin, signout, loading],
  );

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
