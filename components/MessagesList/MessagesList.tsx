import React from 'react';

import cn from 'classnames';

import { useDarkMode } from 'hooks/useDarkMode';

import { Message as MessageType } from '../../@types/Message';
import darkBg from '../../assets/images/bg_dark.svg';
import lightBg from '../../assets/images/bg_light.svg';
import { MessageItem } from '../MessageItem/MessageItem';
import s from './MessagesList.module.scss';

type Props = {
  messages: MessageType[];
};

export const MessagesList = ({ messages }: Props) => {
  const { isDark } = useDarkMode();

  return (
    <div className={s.messagesList} style={{ backgroundImage: `url(${isDark ? darkBg.src : lightBg.src})` }}>
      <div className={s.background} />
      {messages.map(message => (
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
