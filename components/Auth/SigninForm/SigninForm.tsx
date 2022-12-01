import React, { ChangeEvent, EventHandler, FormEvent, useState } from 'react';

import s from './SigninForm.module.scss';

type FormData = {
  email: string;
  password: string;
};

type Props = {
  onSubmit: (data: FormData) => void;
};

export default function SigninForm({ onSubmit }: Props) {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    if (name !== 'email' && name !== 'password') return;

    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    onSubmit(formData);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <h2 className={s.title}>Вход</h2>
      <div className={s.inputs}>
        <input
          className={s.input}
          onChange={handleChange}
          value={formData.email}
          type='email'
          name='email'
          placeholder='Логин'
        />
        <input
          className={s.input}
          onChange={handleChange}
          value={formData.password}
          type='password'
          name='password'
          placeholder='Пароль'
        />
      </div>
      <button className={s.button} type='submit'>
        Войти
      </button>
    </form>
  );
}
