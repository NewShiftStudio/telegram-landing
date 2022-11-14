import Image from 'next/image';
import React, { ChangeEvent, useCallback, useState } from 'react';

import attachIcon from '../../assets/icons/attach.svg';
import menu from '../../assets/icons/menu.svg';
import menuButton from '../../assets/icons/menuButton.svg';
import phone from '../../assets/icons/phone.svg';
import sendMessage from '../../assets/icons/sendMessage.svg';
import s from './InputBlock.module.scss';

type MenuLink = {
  title: string;
  href: string;
};

type Props = {
  menuLinks: MenuLink[];
  phoneLink: string;
  onSend: (text: string) => void;
};

export const InputBlock = ({ menuLinks, phoneLink, onSend }: Props) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const [formData, setFormData] = useState('');

  const canSendMessage = !!formData.trim();

  const handleSubmit = () => {
    setFormData('');
    onSend(formData);
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(e.target.value);
  };

  const toggleMenu = useCallback(() => {
    setIsMenuOpened(prevState => !prevState);
  }, []);

  return (
    <div className={s.inputBlock}>
      <div className={s.top}>
        <div className={s.left}>
          <button className={s.menuButton} type='button' onClick={toggleMenu}>
            <Image className={s.menuIcon} src={menu} width={20} height={20} alt='menu' />
            <p className={s.menuButtonText}>Menu</p>
            <Image className={s.menuIconMobile} src={menuButton} width={21} height={21} alt='menuButton' />
          </button>
          <input
            value={formData}
            className={s.textInput}
            onChange={handleChangeInput}
            placeholder='Опишите свой проект'
            type='text'
          />
        </div>

        <div className={s.right}>
          <label className={s.attachFile} htmlFor='attach-file'>
            <input className={s.fileInput} type='file' name='file' id='attach-file' />
            <Image src={attachIcon} width={27} height={27} alt='attach file' />
          </label>
          {canSendMessage ? (
            <button onClick={handleSubmit} type='button'>
              <Image src={sendMessage} width={21} height={21} alt='send message' />
            </button>
          ) : (
            <a href={`tel:${phoneLink}`} className={s.phoneLink}>
              <Image src={phone} width={27} height={27} alt='phone' />
            </a>
          )}
        </div>
      </div>
      {isMenuOpened && (
        <div className={s.menuLinks}>
          {menuLinks.map(link => (
            <a key={link.href} href={link.href} className={s.menuLink}>
              {link.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
