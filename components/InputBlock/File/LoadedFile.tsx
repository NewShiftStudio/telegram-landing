import Image from 'next/image';
import React from 'react';

import s from './LoadedFile.module.scss';

import closeIcon from 'assets/icons/close.svg';

type Props = {
  name: string;
  size: number;
  type: string;
  onDelete: () => void;
};

export const LoadedFile = ({ name, size, type, onDelete }: Props) => (
  <div className={s.file} key={size}>
    <div className={s.icon} />
    <div className={s.info}>
      <div className={s.name}>{name}</div>
      <div className={s.size}>
        {size} MB {type.toUpperCase()}
      </div>
    </div>
    <button type='button' className={s.delete} onClick={onDelete}>
      <Image src={closeIcon} width={24} height={24} alt='close' />
    </button>
  </div>
);
