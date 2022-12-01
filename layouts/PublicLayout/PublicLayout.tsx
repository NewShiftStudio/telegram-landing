import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

import { Resizable, ResizableProps } from 're-resizable';

import { ChatHeader } from 'components/Chat/Header/Header';
import { Disclaimer } from 'components/Disclaimer/Disclaimer';
import { InputBlock } from 'components/InputBlock/InputBlock';
import { Sidebar } from 'components/Sidebar/Sidebar';

import { Chat } from 'types/entities/Chat';

import { menuLinks, phoneLink } from 'constants/commonLinks';
import useMediaQuery from 'hooks/useMediaQuery';

import s from './PublicLayout.module.scss';

type Props = {
  chatsList: Chat[];
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

export const PublicLayout = ({ children, chatsList }: Props) => {
  const router = useRouter();
  const query = (router.query.id || '/') as string;

  const [cookies, setCookie] = useCookies(['disclaimerApproved']);

  const [disclaimerApproved, setDisclaimerApproved] = useState(true);

  const isMobile = useMediaQuery('(max-width: 767px)');
  const isResizeble = useMediaQuery('(min-width: 1024px)');

  const openedChat = chatsList.find(chat => chat.path === query);

  const onClickBack = () => {
    if (isMobile) {
      router.push('/menu');
    } else {
      router.push('/');
    }
  };

  useEffect(() => {
    setDisclaimerApproved(cookies.disclaimerApproved === 'true');
  }, [cookies]);

  const handleApproveDisclaimer = () => {
    setCookie('disclaimerApproved', 'true');
    setDisclaimerApproved(true);
  };

  const handleSendMessage = () => undefined;

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
      {!disclaimerApproved && <Disclaimer onClick={handleApproveDisclaimer} />}
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
