import { useRouter } from 'next/router';
import React, { ReactNode, useCallback, useState } from 'react';

import cn from 'classnames';

import { ChatHeader } from '../../components/Chat/Header/Header';
import { InputBlock } from '../../components/InputBlock/InputBlock';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { chatsList } from '../../constants/chats';
import { menuLinks, phoneLink } from '../../constants/commonLinks';
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

  const handleSendMessage = (message: string) => {
    console.log(message);
  };

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
            phoneLink={phoneLink}
            onClickBack={openSidebar}
          />
        </div>
        <div className={s.chat}>{children}</div>
        <div className={s.footer}>
          <InputBlock menuLinks={menuLinks} phoneLink={phoneLink} onSend={handleSendMessage} />
        </div>
      </div>
    </div>
  );
};
