import { useRouter } from 'next/router';
import React, { ReactNode, useCallback, useState } from 'react';

import cn from 'classnames';

import { ChatHeader } from '../../components/Chat/Header/Header';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { chatsList } from '../../constants/chats';
import s from './AppLayout.module.scss';

type Props = {
  children: ReactNode;
};

export const AppLayout = ({ children }: Props) => {
  const router = useRouter();
  const query = (router.query.id || '/') as string;

  const [isSidebarOpened, setIsSidebarOpened] = useState(true);

  const openedChat = chatsList.find(chat => chat.path === query);

  const closeSidebar = useCallback(() => {
    setIsSidebarOpened(false);
  }, []);

  const openSidebar = useCallback(() => {
    setIsSidebarOpened(true);
  }, []);

  return (
    <div className={cn(s.container, { [s.openedSidebar]: isSidebarOpened })}>
      <div className={s.sidebar}>
        <Sidebar chatsList={chatsList} openedLink={openedChat?.path} onClick={closeSidebar} />
      </div>
      <div className={s.content}>
        <div className={s.header}>
          <ChatHeader
            title={openedChat?.title || 'Чат не найден'}
            image={openedChat?.image?.src}
            isOnline={!!query}
            phoneLink='89218650538'
            onClickBack={openSidebar}
          />
        </div>
        {children}
      </div>
    </div>
  );
};
