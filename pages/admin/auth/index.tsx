import Head from 'next/head';
import { ChangeEvent, FormEvent, useState } from 'react';

import s from './auth.module.scss';

export default function Admin() {
  const [formData, setFormData] = useState({});

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

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
