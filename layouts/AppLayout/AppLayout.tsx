import { useRouter } from 'next/router';
import React, { ReactNode, useCallback, useState } from 'react';

import cn from 'classnames';

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

  const closeSidebar = useCallback(() => {
    setIsSidebarOpened(false);
  }, []);

  const openSidebar = useCallback(() => {
    setIsSidebarOpened(true);
  }, []);

  return (
    <div className={cn(s.container, { [s.openedSidebar]: isSidebarOpened })}>
      <div className={s.sidebar}>
        <Sidebar chatsList={chatsList} openedLink={query || '/'} onClick={closeSidebar} />
      </div>
      <div className={s.content}>
        <button type='button' onClick={openSidebar}>
          Назад
        </button>
        {children}
      </div>
    </div>
  );
};
