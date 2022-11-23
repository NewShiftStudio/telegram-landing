import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

import { chatIcons, chatTitleIcons, lastMessageIcons } from 'constants/icons';

import s from './Chat.module.scss';

type Props = {
  path: string;
  title: string;
  titleIcon?: 'bot' | 'megaphone' | 'peoples';
  lastMessageText: string;
  lastMessageIcon?: 'data' | 'headphones' | 'video' | 'document';
  image?: StaticImageData;
  date?: string;
  isActive?: boolean;
  isOnline?: boolean;
  isPinned?: boolean;
  isChecked?: boolean;
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
  isChecked,
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
              {titleIcon && <div className={s.titleIcon}>{chatTitleIcons[titleIcon]}</div>}
              <p className={s.titleText}>{title}</p>
              {isChecked && <div className={s.checkedIcon}>{chatIcons.starburst}</div>}
            </div>
            <p className={s.date}>{date}</p>
          </div>
          <div className={s.lastMessage}>
            {lastMessageIcon && <div className={s.lastMessageIcon}>{lastMessageIcons[lastMessageIcon]}</div>}
            <p className={s.lastMessageText}>{lastMessageText}</p>
            {isPinned && <div className={s.isPinned}>{chatIcons.isPinned}</div>}
          </div>
        </div>
      </div>
    </Link>
  );
}
