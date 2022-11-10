import React from 'react';

import s from './Sidebar.module.scss';

type Props = {
  title: string;
};

export function Sidebar({ title }: Props) {
  return <div className={s.sidebar}>{title}</div>;
}
