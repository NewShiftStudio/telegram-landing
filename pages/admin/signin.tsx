import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { useMutation } from 'react-query';

import { authApi } from 'api/authApi';
import { AuthContext } from 'contexts/authContext';

import { AuthLayout } from 'layouts/AuthLayout/AuthLayout';

import SigninForm from 'components/Auth/SigninForm/SigninForm';

import { SignInDto } from 'types/dto/auth/signin';

export default function Signin() {
  const router = useRouter();
  const signin = useMutation<Response, unknown, SignInDto>(data => authApi.signIn(data));

  const { setIsAuth } = useContext(AuthContext);

  const handleSubmit = async (data: SignInDto) => {
    try {
      await signin.mutate(data);
      setIsAuth(true);
      router.push('/admin');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthLayout>
      <SigninForm onSubmit={handleSubmit} />
    </AuthLayout>
  );
}
