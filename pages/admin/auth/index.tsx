import Head from 'next/head';
import { useRouter } from 'next/router';
import { ChangeEvent, FormEvent, ReactElement, useState } from 'react';

import { AuthProvider } from 'contexts/authContext';

import { SignInDto } from 'https/auth';

import { useAuth } from 'hooks/useAuth';

import s from './auth.module.scss';

const getDefaultFormData = (): SignInDto => ({ email: '', password: '' });

export default function Auth() {
  const router = useRouter();
  const [formData, setFormData] = useState<SignInDto>(getDefaultFormData);

  const { isAuth, isLoading, signin } = useAuth();

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signin(formData);
  };

  if (isLoading) {
    return <p>Загрузка...</p>;
  }

  if (isAuth) {
    router.push('/admin');
    return null;
  }

  return (
    <>
      <Head>
        <title>Вход</title>
      </Head>

      <div className={s.container}>
        <form className={s.form} onSubmit={handleSubmit}>
          <h2 className={s.title}>Вход</h2>
          <input className={s.input} onChange={handleChangeInput} placeholder='Email' type='email' name='email' />
          <input
            className={s.input}
            onChange={handleChangeInput}
            placeholder='Пароль'
            type='password'
            name='password'
          />
          <button className={s.button} type='submit'>
            Войти
          </button>
        </form>
      </div>
    </>
  );
}

Auth.getLayout = function getLayout(page: ReactElement) {
  return <AuthProvider>{page}</AuthProvider>;
};
