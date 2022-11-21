import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

import { chatTitleIcons } from 'constants/icons';

import s from './Chat.module.scss';

type Props = {
  path: string;
  title: string;
  titleIcon?: 'bot' | 'megaphone' | 'peoples';
  lastMessageText: string;
  lastMessageIcon?: string;
  image?: StaticImageData;
  date?: string;
  isActive?: boolean;
  isOnline?: boolean;
  isPinned?: boolean;
  onClick?: () => void;
};

export function Chat({
  path,
  title,
  image,
  titleIcon,
  lastMessageText,
  lastMessageIcon,
  date,
  isActive,
  isOnline,
  isPinned,
  onClick,
}: Props) {
  return (
    <Link href={path} onClick={onClick}>
      <div className={`${s.chatLink} ${isActive ? s.active : ''}`}>
        <div className={s.icon}>{image && <Image src={image} width={50} height={50} alt='chat image' />}</div>
        <div className={s.content}>
          <div className={s.heading}>
            <div className={s.title}>
              {titleIcon && chatTitleIcons[titleIcon]}
              <p className={s.titleText}>{title}</p>
            </div>
            <p className={s.date}>{date}</p>
          </div>
          <p className={s.lastMessage}>{lastMessageText}</p>
        </div>
      </div>
    </Link>
  );
}
