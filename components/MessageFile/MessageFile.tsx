import Image from 'next/image';
import React, { memo } from 'react';

import s from './MessageFile.module.scss';

import fileIcon from 'assets/icons/file.svg';

type Props = {
  name: string;
  type: string;
  size: string;
};

export const MessageFile = memo(({ name, type, size }: Props) => (
  <div className={s.messageFile}>
    <div className={s.icon}>
      <div className={s.circle}>
        <Image src={fileIcon} width={26} height={26} alt='file' />
      </div>
    </div>
    <div className={s.info}>
      <div className={s.name}>{name}</div>
      <div className={s.size}>
        {size} {type}
      </div>
    </div>
  </div>
));
