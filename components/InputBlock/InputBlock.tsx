import Image from 'next/image';
import React, { ChangeEvent, useCallback, useState } from 'react';

import { Textarea } from 'components/UI/Textarea/Textarea';

import { checkFileSize, getFileMbSize, getFileType, getFilesArray } from 'utils/filesHelper';

import { MAX_FILE_SIZE } from 'constants/file';

import { LoadedFile } from './File/LoadedFile';

import s from './InputBlock.module.scss';

import attachIcon from 'assets/icons/attach.svg';
import menu from 'assets/icons/menu.svg';
import menuButton from 'assets/icons/menuButton.svg';
import phone from 'assets/icons/phone.svg';
import sendMessage from 'assets/icons/sendMessage.svg';

export type MenuLink = {
  title: string;
  href: string;
};

type FormData = {
  message: string;
  files: File[];
};

type Props = {
  menuLinks: MenuLink[];
  phoneLink: string;
  onSend: (data: FormData) => void;
};

export const InputBlock = ({ menuLinks, phoneLink, onSend }: Props) => {
  const [fileErrors, setFileErrors] = useState<string>('');
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [message, setMessage] = useState('');

  const canSendMessage = !!message.trim();

  const handleSubmit = () => {
    setMessage('');
    setFiles([]);
    onSend({
      message,
      files,
    });
  };

  const handleChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const filesList = e.target.files;
    const filesArray = getFilesArray(filesList);

    filesArray.forEach(file => {
      const result = checkFileSize(file, MAX_FILE_SIZE);
      if (result.status === 'error') {
        setFileErrors(result.message || 'Произошла ошибка');
      }
    });

    setFiles(prevFiles => [...prevFiles, ...filesArray]);
  };

  const handleDeleteFile = (index: number) => {
    setFiles(prevState => {
      const newArr = [...prevState];
      newArr.splice(index, 1);
      return newArr;
    });
  };

  const handleChangeInput = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  }, []);
  const toggleMenu = () => {
    setIsMenuOpened(prevState => !prevState);
  };

  return (
    <div className={s.inputBlock}>
      <div className={s.top}>
        <div className={s.left}>
          <button className={s.menuButton} type='button' onClick={toggleMenu}>
            <Image className={s.menuIcon} src={menu} width={20} height={20} alt='menu' />
            <p className={s.menuButtonText}>Menu</p>
            <Image className={s.menuIconMobile} src={menuButton} width={21} height={21} alt='menuButton' />
          </button>
          <Textarea
            value={message}
            className={s.textInput}
            onChange={handleChangeInput}
            placeholder='Опишите свой проект'
            maxRows={4}
          />
        </div>

        <div className={s.right}>
          <label className={s.attachFile} htmlFor='attach-file'>
            <input
              multiple
              className={s.fileInput}
              onChange={handleChangeFiles}
              type='file'
              name='file'
              id='attach-file'
            />
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
      {!!fileErrors && <p>{fileErrors}</p>}
      {!!files.length && (
        <div className={s.filesList}>
          {files.map((file, i) => (
            <LoadedFile
              key={Math.random()}
              name={file.name}
              size={getFileMbSize(file)}
              type={getFileType(file)}
              onDelete={() => handleDeleteFile(i)}
            />
          ))}
        </div>
      )}

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
