import React, { ReactNode } from 'react';

import { ChatHeader } from 'components/Chat/Header/Header';
import { InputBlock } from 'components/InputBlock/InputBlock';
import { Sidebar } from 'components/Sidebar/Sidebar';

import s from './AdminLayout.module.scss';

type Props = {
  children: ReactNode;
};

export function AdminLayout({ children }: Props) {
  console.log('test');

  const handleSendMessage = (data: any) => {
    console.log(data);
  };

  return (
    <div className={s.container}>
      <div className={s.sidebar}>
        <Sidebar chatsList={[]} />
      </div>
      <div className={s.content}>
        <div className={s.header}>
          <ChatHeader title='test' isOnline={false} phoneLink='test' />
        </div>
        <div className={s.chat}>{children}</div>
        <div className={s.footer}>
          <InputBlock onSend={handleSendMessage} menuLinks={[]} />
        </div>
      </div>
    </div>
  );
}
