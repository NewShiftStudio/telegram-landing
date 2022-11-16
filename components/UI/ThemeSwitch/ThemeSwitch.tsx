import Image from 'next/image';
import React from 'react';

import cn from 'classnames';

import moonIcon from '../../../assets/icons/moon.svg';
import sunIcon from '../../../assets/icons/sun.svg';
import s from './ThemeSwitch.module.scss';

type Props = {
  isActive?: boolean;
  onChange: () => void;
};

export const ThemeSwitch = ({ isActive, onChange }: Props) => (
  <label htmlFor='switchTheme' className={s.wrapper}>
    <input checked={isActive} className={s.input} id='switchTheme' type='checkbox' onChange={onChange} />
    <div className={cn(s.switch, { [s.active]: isActive })}>
      <div className={s.point}>
        <Image className={cn(s.icon, s.light)} src={sunIcon} alt='sun' />
        <Image className={cn(s.icon, s.dark)} src={moonIcon} alt='moon' />
      </div>
    </div>
  </label>
);
