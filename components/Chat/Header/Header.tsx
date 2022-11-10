import Image from 'next/image';
import React from 'react';

import backIcon from '../../../assets/icons/back.svg';
import phone from '../../../assets/icons/phone.svg';
import s from './Header.module.scss';

type Props = {
  title: string;
  image?: string;
  isOnline: boolean;
  phoneLink: string;
  onClickBack: () => void;
};

export const ChatHeader = ({ image, title, isOnline, phoneLink, onClickBack }: Props) => (
  <div className={s.header}>
    <div className={s.left}>
      <button onClick={onClickBack} type='button'>
        <Image src={backIcon} width={25} height={25} alt='back' />
      </button>
      <div className={s.icon}>{image && <Image src={image} width={43} height={43} alt='chat icon' />}</div>
      <div className={s.info}>
        <p className={s.title}>{title}</p>
        {isOnline && <p className={s.isOnline}>в сети</p>}
      </div>
    </div>
    <a href={`tel:${phoneLink}`}>
      <Image src={phone} width={27} height={27} alt='back' />
    </a>
  </div>
);
