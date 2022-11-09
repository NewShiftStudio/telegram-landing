import { useRouter } from 'next/router';
import React, { ReactNode, useState } from 'react';

import { Sidebar } from '../../components/Sidebar/Sidebar';
import { chatsList } from '../../constants/chats';
import s from './AppLayout.module.scss';

type Props = {
  children: ReactNode;
};

export const AppLayout = ({ children }: Props) => {
  const router = useRouter();
  const query = router.query.id as string | undefined;

  const [isSidebarOpened, setIsSidebarOpened] = useState(!!query);

  return (
    <div className={`${s.container} ${isSidebarOpened ? s.openedSidebar : ''}`}>
      <div className={s.sidebar}>
        <Sidebar chatsList={chatsList} openedLink={query || '/'} onClick={() => setIsSidebarOpened(false)} />
      </div>
      <div className={s.content}>
        <button type='button' onClick={() => setIsSidebarOpened(true)}>
          Назад
        </button>
        {children}
      </div>
    </div>
  );
};
