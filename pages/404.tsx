import Head from 'next/head';

import s from './index.module.scss';

export default function ErrorPage() {
  return (
    <>
      <Head>
        <title>Чат не найден</title>
        <meta name='description' content='Чат не найден' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={s.container}>
        <h1 className={s.title}>Чат не найден</h1>
        <p>Но если вам очень интересна эта страница, то можете связаться с нами</p>
      </div>
    </>
  );
}
