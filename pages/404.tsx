import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import s from './404.module.scss';

import errorImage from 'assets/images/error.svg';

export default function ErrorPage() {
  const router = useRouter();
  const backToHome = () => router.push('/');
  return (
    <>
      <Head>
        <title>Чат не найден</title>
        <meta name='description' content='Чат не найден' />
      </Head>

      <div className={s.errorPage}>
        <Image className={s.image} src={errorImage} alt='error' />
        <h2 className={s.title}>404</h2>
        <h3 className={s.subtitle}>Страница не найдена</h3>
        <p className={s.text}>
          К сожалению, запрашиваемая страница не найдена. Возможно, вы перешли по ссылке, в которой была допущена
          ошибка, или ресурс был удален
        </p>
        <button type='button' className={s.button} onClick={backToHome}>
          Вернуться на сайт
        </button>
      </div>
    </>
  );
}
