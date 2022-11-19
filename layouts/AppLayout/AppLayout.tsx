import { useRouter } from 'next/router';
import { ReactNode, useCallback, useState } from 'react';

import cn from 'classnames';
import { Resizable, ResizableProps } from 're-resizable';

import { MobileSidebar } from 'components/MobileSidebar/MobileSidebar';

import { ChatHeader } from '../../components/Chat/Header/Header';
import { InputBlock } from '../../components/InputBlock/InputBlock';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { chatsList } from '../../constants/chats';
import { menuLinks, phoneLink } from '../../constants/commonLinks';
import useMediaQuery from '../../hooks/useMediaQuery';
import s from './AppLayout.module.scss';

type Props = {
  children: ReactNode;
};

const resizableProps: ResizableProps = {
  defaultSize: {
    width: 350,
    height: '100%',
  },
  minWidth: 330,
  maxWidth: 500,
  onResize: (_event, _direction, elemRef, _delta) => {
    elemRef.style.maxWidth = 'calc(100vw - 350px)';
  },
  enable: {
    right: true,
    left: true,
  },
};

export const AppLayout = ({ children }: Props) => {
  const router = useRouter();
  const query = (router.query.id || '/') as string;

  const isMobile = useMediaQuery('(max-width: 1024px)');

  const [isSidebarOpened, setIsSidebarOpened] = useState(true);

  const openedChat = chatsList.find(chat => chat.path === query);

  const closeSidebar = useCallback(() => {
    setIsSidebarOpened(false);
  }, []);

  const openSidebar = useCallback(() => {
    setIsSidebarOpened(true);
  }, []);

  const handleClickContactUs = useCallback(() => {
    router.push('/');
    setIsSidebarOpened(false);
  }, []);

  const handleSendMessage = (message: string) => {
    console.log(message);
  };

  return (
    <div className={cn(s.container, { [s.openedSidebar]: isSidebarOpened })}>
      {isMobile ? (
        <>
          <div className={s.sidebar}>
            <Sidebar chatsList={chatsList} openedLink={openedChat?.path} onClick={closeSidebar} />
          </div>
          <div className={s.footer}>
            <MobileSidebar onClickContactUs={handleClickContactUs} />
          </div>
        </>
      ) : (
        <Resizable {...resizableProps} className={s.sidebar}>
          <Sidebar chatsList={chatsList} openedLink={openedChat?.path} onClick={closeSidebar} />
        </Resizable>
      )}

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
