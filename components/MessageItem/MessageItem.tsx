import Image from 'next/image';
import React from 'react';

import cn from 'classnames';

import { MessageLink } from '../../@types/Message';
import leftMessageTail from '../../assets/icons/leftMessageTail.svg';
import readIcon from '../../assets/icons/readIcon.svg';
import rightMessageTail from '../../assets/icons/rightMessageTail.svg';
import { LinkMessage } from '../LinkMessage/LinkMessage';
import s from './MessageItem.module.scss';

type Props = {
  text?: string;
  image?: string;
  date: string;
  withTail?: boolean;
  isOutgoing?: boolean;
  link?: MessageLink;
};

export const MessageItem = ({ text, image, date, isOutgoing, withTail, link }: Props) => (
  <div className={s.message}>
    <div className={cn(s.messageContent, { [s.outgoing]: isOutgoing, [s.withTail]: withTail })}>
      {image && <Image className={s.image} src={image} width={1} height={1} alt='message image' />}
      {text && <div className={s.text}>{text}</div>}
      <div className={s.bottom}>
        <p className={s.date}>{date}</p>
        {isOutgoing && <Image src={readIcon} className={s.readIcon} width={18} height={18} alt='read' />}
      </div>
      {withTail && (
        <div className={cn(s.tail, { [s.right]: isOutgoing })}>
          <Image src={isOutgoing ? rightMessageTail : leftMessageTail} width={6} height={10} alt='tail' />
        </div>
      )}
    </div>
    {link && <LinkMessage href={link.href} title={link.title} />}
  </div>
);