import { useRouter } from 'next/router';
import { ReactNode } from 'react';

import { ChatHeader } from 'components/Chat/Header/Header';
import { InputBlock } from 'components/InputBlock/InputBlock';
import { Sidebar } from 'components/Sidebar/Sidebar';

import { useAuth } from 'hooks/useAuth';
import useMediaQuery from 'hooks/useMediaQuery';

import s from './AdminLayout.module.scss';

type Props = {
  children: ReactNode;
};

export const AdminLayout = ({ children }: Props) => {
  const router = useRouter();

  const isMobile = useMediaQuery('(max-width: 767px)');

  const { signout } = useAuth();

  const handleSignout = async () => {
    signout();
  };

  const onClickBack = () => {
    if (isMobile) {
      router.push('/admin/menu');
    }
  };

  const handleSendMessage = () => undefined;

  return (
    <div className={s.container}>
      <div className={s.sidebar}>
        <button type='button' className='bg-black text-white' onClick={handleSignout}>
          Выход
        </button>
        {/* FIXME: подгрузка чатов */}
        <Sidebar chatsList={[]} />
      </div>

      <div className={s.content}>
        <div className={s.header}>
          <ChatHeader title='Чат не найден' isOnline={false} phoneLink='' onClickBack={onClickBack} />
        </div>
        <div className={s.chat}>{children}</div>
        <div className={s.footer}>
          <InputBlock menuLinks={[]} phoneLink='' onSend={handleSendMessage} />
        </div>
      </div>
    </div>
  );
};
