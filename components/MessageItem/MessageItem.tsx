import Image, { StaticImageData } from 'next/image';
import React, { ReactNode } from 'react';

import cn from 'classnames';

import { MessageLink } from '../../@types/Message';
import leftMessageTail from '../../assets/icons/leftMessageTail.svg';
import readIcon from '../../assets/icons/readIcon.svg';
import rightMessageTail from '../../assets/icons/rightMessageTail.svg';
import { LinkMessage } from '../LinkMessage/LinkMessage';
import s from './MessageItem.module.scss';

type Props = {
  text?: ReactNode;
  image?: string | StaticImageData;
  date?: string;
  withTail?: boolean;
  isOutgoing?: boolean;
  link?: MessageLink;
};

export const MessageItem = ({ text, image, date, isOutgoing, withTail, link }: Props) => (
  <div className={s.message}>
    <div className={cn(s.messageContent, { [s.outgoing]: isOutgoing, [s.withTail]: withTail })}>
      {image && <Image className={s.image} src={image} width={500} height={400} alt='message image' />}
      {text && <p className={s.text}>{text}</p>}
      <div className={s.bottom}>
        <p className={s.date}>{date}</p>
        {isOutgoing && (
          <svg
            className={s.readIcon}
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1.57033 9.22719C1.26752 8.94456 0.792928 8.96093 0.510302 9.26374C0.227677 9.56655 0.244042 10.0411 0.546855 10.3238L1.57033 9.22719ZM4.01345 12.5333L3.50171 13.0816C3.78987 13.3506 4.23703 13.3506 4.52519 13.0816L4.01345 12.5333ZM12.2817 5.84224C12.5845 5.55961 12.6009 5.08502 12.3182 4.78221C12.0356 4.47939 11.561 4.46303 11.2582 4.74565L12.2817 5.84224ZM9.18445 12.7057L8.67271 13.254C8.96087 13.5229 9.40803 13.5229 9.69619 13.254L9.18445 12.7057ZM17.4527 6.0146C17.7555 5.73198 17.7719 5.25739 17.4892 4.95457C17.2066 4.65176 16.732 4.63539 16.4292 4.91802L17.4527 6.0146ZM8.7728 11.2956C8.46998 11.013 7.99539 11.0293 7.71277 11.3321C7.43014 11.635 7.44651 12.1095 7.74932 12.3922L8.7728 11.2956ZM0.546855 10.3238L3.50171 13.0816L4.52519 11.9851L1.57033 9.22719L0.546855 10.3238ZM4.52519 13.0816L12.2817 5.84224L11.2582 4.74565L3.50171 11.9851L4.52519 13.0816ZM9.69619 13.254L17.4527 6.0146L16.4292 4.91802L8.67271 12.1574L9.69619 13.254ZM9.69619 12.1574L8.7728 11.2956L7.74932 12.3922L8.67271 13.254L9.69619 12.1574Z'
              fill='#62AC55'
            />
          </svg>
        )}
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
