import React from 'react';
import Skeleton from 'react-loading-skeleton';

import cn from 'classnames';

import { MessageItem } from 'components/MessageItem/MessageItem';
import { SkeletonMessage } from 'components/UI/SkeletonMessage/SkeletonMessage';

import { Message as MessageType } from 'types/Message';

import { useDarkMode } from 'hooks/useDarkMode';

import s from './MessagesList.module.scss';

import darkBg from 'assets/images/bg_dark.svg';
import lightBg from 'assets/images/bg_light.svg';

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
          <SkeletonMessage isDark={!!isDark} />
          <SkeletonMessage isDark={!!isDark} />
        </>
      )}

      {!isLoading &&
        messages.map(message => (
          <div key={message.id} className={cn(s.message, { [s.outgoing]: message.isOutgoing })}>
            <MessageItem
              text={message.text}
              withTail={message.withTail}
              video={message.video}
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
