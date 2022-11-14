import React from 'react';

import cn from 'classnames';

import { Message as MessageType } from '../../@types/Message';
import bg from '../../assets/images/wallpaper.png';
import { Message } from '../Message/Message';
import s from './MessagesList.module.scss';

type Props = {
  messages: MessageType[];
};

export const MessagesList = ({ messages }: Props) => (
  <div className={s.messagesList} style={{ backgroundImage: `url(${bg})` }}>
    {messages.map(message => (
      <div key={message.id} className={cn(s.message, { [s.outgoing]: message.isOutgoing })}>
        <Message
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
