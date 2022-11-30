import React from 'react';

import { Chat } from 'components/Chat/Chat';
import { ThemeSwitch } from 'components/UI/ThemeSwitch/ThemeSwitch';

import type { Chat as ChatType } from 'types/Chat';

import { useDarkMode } from 'hooks/useDarkMode';

import s from './Sidebar.module.scss';

type Props = {
  chatsList: ChatType[];
  openedLink?: string;
  onClick?: () => void;
};

export const Sidebar = ({ chatsList, openedLink, onClick }: Props) => {
  const { isDark, toggleIsDark } = useDarkMode();

  return (
    <div className={s.sidebar}>
      <div className={s.title}>
        <div className={s.left}>
          <p>Чаты</p>
        </div>
        <ThemeSwitch isActive={!!isDark} onChange={toggleIsDark} />
      </div>
      <div className={s.chatsList}>
        {chatsList.length === 0 && <p className={s.empty}>Нет актуальных чатов</p>}
        {chatsList.map(chat => (
          <Chat
            key={chat.path}
            path={chat.path}
            title={chat.title}
            image={chat.image}
            isActive={chat.path === openedLink}
            isPinned={chat.isPinned}
            isOnline={chat.isOnline}
            lastMessageIcon={chat.lastMessageIcon}
            titleIcon={chat.titleIcon}
            date={chat.date}
            isChecked={chat.isChecked}
            lastMessageText={chat.lastMessageText}
            onClick={onClick}
          />
        ))}
      </div>
    </div>
  );
};
