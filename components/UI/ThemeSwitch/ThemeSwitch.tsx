import React from 'react';

import cn from 'classnames';

import { switchIcons } from './switchIcons';

import s from './ThemeSwitch.module.scss';

type Props = {
  isActive?: boolean;
  onChange: () => void;
};

export const ThemeSwitch = ({ isActive, onChange }: Props) => (
  <label htmlFor='switchTheme' className={s.wrapper}>
    <input checked={isActive} className={s.input} id='switchTheme' type='checkbox' onChange={onChange} />
    <div className={cn(s.switch, { [s.active]: isActive })}>
      <div className={s.point}>{isActive ? switchIcons.moon : switchIcons.sun}</div>
    </div>
  </label>
);
