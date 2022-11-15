import React from 'react';

import s from './LinkMessage.module.scss';

type Props = {
  href: string;
  title: string;
};

export const LinkMessage = ({ title, href }: Props) => (
  <a className={s.linkMessage} rel='noreferrer' target='_blank' href={href}>
    {title}
  </a>
);
