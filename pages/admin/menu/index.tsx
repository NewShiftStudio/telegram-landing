import Head from 'next/head';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

import ErrorPage from 'pages/404';

import { MobileSidebar } from 'components/MobileSidebar/MobileSidebar';
import { Sidebar } from 'components/Sidebar/Sidebar';

import { chatsList } from 'constants/chats';
import useMediaQuery from 'hooks/useMediaQuery';

import s from './menu.module.scss';

export default function Menu() {
  const router = useRouter();
  const isMobile = useMediaQuery('(max-width: 1024px)');

  const handleClickContactUs = useCallback(() => {
    router.push('/');
  }, [router]);

  if (!isMobile) return <ErrorPage />;

  return (
    <>
      <Head>
        <title>New Shift — разработка сайтов, сервисов, приложений, чат-ботов в СПб</title>
      </Head>

      <div className={s.container}>
        <div className={s.sidebar}>
          <Sidebar chatsList={chatsList} />
        </div>
        <div className={s.mobileFooter}>
          <MobileSidebar onClickContactUs={handleClickContactUs} />
        </div>
      </div>
    </>
  );
}
