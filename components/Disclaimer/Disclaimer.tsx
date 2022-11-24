import Image from 'next/image';
import React from 'react';

import logo from '../../assets/icons/logo.svg';

import s from './Disclaimer.module.scss';

type Props = {
  onClick: () => void;
};

export const Disclaimer = ({ onClick }: Props) => (
  <div className={s.background}>
    <div className={s.disclaimer}>
      <Image className={s.logo} src={logo} width={210} height={50} alt='Логотип' />
      <div className={s.title}>Уважаемые пользователи</div>
      <div className={s.text}>
        Обращаем ваше внимание, что данный сайт не является официальным приложением Telegram. Вся информация,
        представленная на сайте, несет исключительно ознакомительный характер, выполненный в стилистике мессенджера в
        связи с продвижением чат-ботов в Telegram.
      </div>
      <button type='button' className={s.button} onClick={onClick}>
        Перейти на сайт
      </button>
    </div>
  </div>
);
