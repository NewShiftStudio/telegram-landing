import Image from 'next/image';
import React from 'react';

import cn from 'classnames';

import leftMessageTail from '../../assets/icons/leftMessageTail.svg';
import readIcon from '../../assets/icons/readIcon.svg';
import rightMessageTail from '../../assets/icons/rightMessageTail.svg';
import s from './Message.module.scss';

type Props = {
  text?: string;
  image?: string;
  date: string;
  withTail?: boolean;
  isOutgoing?: boolean;
};

export const Message = ({ text, image, date, isOutgoing, withTail }: Props) => (
  <div className={cn(s.message, { [s.outgoing]: isOutgoing, [s.withTail]: withTail })}>
    {image && <Image className={s.image} src={image} width={1} height={1} alt='message image' />}
    {text && <div className={s.text}>{text}</div>}
    <div className={s.bottom}>
      <p className={s.date}>{date}</p>
      {isOutgoing && <Image src={readIcon} className={s.readIcon} width={18} height={18} alt='read' />}
    </div>
    {withTail && (
      <div className={cn(s.tail, { [s.right]: isOutgoing })}>
        {isOutgoing ? (
          <Image src={rightMessageTail} width={6} height={10} alt='tail' />
        ) : (
          <Image src={leftMessageTail} width={6} height={10} alt='tail' />
        )}
      </div>
    )}
  </div>
);
