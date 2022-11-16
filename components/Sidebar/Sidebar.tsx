import Image from 'next/image';
import React from 'react';

import { Chat as ChatType } from '../../@types/Chat';
import listIcon from '../../assets/icons/burger.svg';
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
        <Image className={s.listIcon} src={listIcon} alt='list' />
        <p>Чаты</p>
        <div className='toggleTheme'>
          <ThemeSwitch isActive={isDark} onChange={onChangeTheme} />
        </div>
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
