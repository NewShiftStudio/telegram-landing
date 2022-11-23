import { useRouter } from 'next/router';
import { ReactNode, useCallback, useState } from 'react';

import cn from 'classnames';
import { Resizable, ResizableProps } from 're-resizable';

import { ChatHeader } from 'components/Chat/Header/Header';
import { InputBlock } from 'components/InputBlock/InputBlock';
import { MobileSidebar } from 'components/MobileSidebar/MobileSidebar';
import { Sidebar } from 'components/Sidebar/Sidebar';

import { chatsList } from 'constants/chats';
import { menuLinks, phoneLink } from 'constants/commonLinks';
import useMediaQuery from 'hooks/useMediaQuery';

import s from './AppLayout.module.scss';

type Props = {
  children: ReactNode;
};

const resizableProps: ResizableProps = {
  defaultSize: {
    width: 400,
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

  const isMobile = useMediaQuery('(max-width: 767px)');
  const isResizeble = useMediaQuery('(min-width: 1024px)');

  console.log(isResizeble);

  const openedChat = chatsList.find(chat => chat.path === query);

  const onClickBack = () => {
    if (isMobile) {
      router.push('/menu');
    } else {
      router.push('/');
    }
  };

  const handleSendMessage = (message: string) => {
    console.log(message);
  };

  return (
    <div className={s.container}>
      {!isMobile &&
        (isResizeble ? (
          <Resizable {...resizableProps}>
            <Sidebar chatsList={chatsList} openedLink={openedChat?.path} />
          </Resizable>
        ) : (
          <div className={s.sidebar}>
            <Sidebar chatsList={chatsList} openedLink={openedChat?.path} />
          </div>
        ))}

      <div className={s.content}>
        <div className={s.header}>
          <ChatHeader
            title={openedChat?.title || 'Чат не найден'}
            image={openedChat?.image?.src}
            isOnline={!!query}
            phoneLink={phoneLink}
            onClickBack={onClickBack}
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
