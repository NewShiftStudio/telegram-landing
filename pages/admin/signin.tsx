import React from 'react';

import SigninForm from 'components/Auth/SigninForm/SigninForm';

import s from './signin.module.scss';

export default function Signin() {
  const handleSubmit = () => {
    console.log('submit');
  };

  return (
    <div className={s.content}>
      <SigninForm onSubmit={handleSubmit} />
    </div>
  );
}
