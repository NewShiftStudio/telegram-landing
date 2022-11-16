import React from 'react';

import { Chat as ChatType } from '../../@types/Chat';
import { useDarkMode } from '../../hooks/useDarkMode';
import { Chat } from '../Chat/Chat';
import { ThemeSwitch } from '../UI/ThemeSwitch/ThemeSwitch';
import s from './Sidebar.module.scss';

type Props = {
  chatsList: ChatType[];
  openedLink?: string;
  onClick: () => void;
};

export const Sidebar = ({ chatsList, openedLink, onClick }: Props) => {
  const { isDark, toggleDark } = useDarkMode();

  const onChangeTheme = () => {
    toggleDark();
  };

  return (
    <div className={s.sidebar}>
      <div className={s.title}>
        <div className={s.left}>
          <div className={s.listIcon}>
            <svg width='16' height='11' viewBox='0 0 16 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M0.5 5.5H15.5M0.5 0.5H15.5M0.5 10.5H15.5' stroke='black' strokeLinecap='round' />
            </svg>
          </div>
          <p>Чаты</p>
        </div>
        <ThemeSwitch isActive={isDark} onChange={onChangeTheme} />
      </div>
      {chatsList.map(chat => (
        <Chat
          key={chat.path}
          path={chat.path}
          title={chat.title}
          image={chat.image}
          isActive={chat.path === openedLink}
          titleIcon={chat.titleIcon}
          date={chat.date}
          lastMessageText={chat.lastMessageText}
          onClick={onClick}
        />
      ))}
    </div>
  );
};
