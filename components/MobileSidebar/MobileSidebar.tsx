import Image from 'next/image';
import React from 'react';

import cn from 'classnames';

import contactUsIcon from '../../assets/icons/contactUs.svg';
import messagesIcon from '../../assets/icons/messages.svg';
import phoneIcon from '../../assets/icons/phone-light.svg';
import s from './MobileSidebar.module.scss';

type Props = {
  phone?: string;
  newMessagesCount?: number;
  onClickContactUs?: () => void;
};

export const MobileSidebar = ({ newMessagesCount, phone, onClickContactUs }: Props) => (
  <div className={s.mobileSidebar}>
    <button type='button' className={s.link} onClick={onClickContactUs}>
      <Image className={s.icon} src={contactUsIcon} width={26} height={26} alt='contact us' />
      <div className={s.text}>Написать нам</div>
    </button>

    <div className={cn(s.link, s.active)}>
      {!!newMessagesCount && <div className={s.counter}>{newMessagesCount}</div>}
      <Image className={s.icon} src={messagesIcon} width={29} height={26} alt='messages' />
      <div className={s.text}>Чаты</div>
    </div>
    <a href={`tel:${phone}`} className={s.link}>
      <Image className={s.icon} src={phoneIcon} width={26} height={26} alt='phone' />
      <div className={s.text}>Позвонить нам</div>
    </a>
  </div>
);
