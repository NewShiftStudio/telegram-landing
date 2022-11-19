import React from 'react';
import Skeleton from 'react-loading-skeleton';

import cn from 'classnames';

import { Message as MessageType } from '../../@types/Message';
import darkBg from '../../assets/images/bg_dark.svg';
import lightBg from '../../assets/images/bg_light.svg';
import { useDarkMode } from '../../hooks/useDarkMode';
import { MessageItem } from '../MessageItem/MessageItem';
import s from './MessagesList.module.scss';

type Props = {
  messages: MessageType[];
  isLoading?: boolean;
};

export const MessagesList = ({ messages, isLoading }: Props) => {
  const { isDark } = useDarkMode();

  return (
    <div className={s.messagesList} style={{ backgroundImage: `url(${isDark ? darkBg.src : lightBg.src})` }}>
      <div className={s.background} />

      {isLoading && (
        <>
          <Skeleton className={s.skeletonLoader} count={3} />
          <Skeleton className={s.skeletonLoader} height={240} />
        </>
      )}

      {!isLoading &&
        messages.map(message => (
          <div key={message.id} className={cn(s.message, { [s.outgoing]: message.isOutgoing })}>
            <MessageItem
              text={message.text}
              withTail={message.isOutgoing}
              image={message.image}
              isOutgoing={message.isOutgoing}
              date={message.createdAt}
              link={message.link}
            />
          </div>
        ))}
    </div>
  );
};
