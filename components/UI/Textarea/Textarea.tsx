import React, { ChangeEvent } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import cn from 'classnames';

import s from './Textarea.module.scss';

type Props = {
  value?: string;
  maxRows?: number;
  minRows?: number;
  className?: string;
  placeholder?: string;
  resize?: boolean;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

export const Textarea = ({ value, maxRows, minRows, resize, className, placeholder, onChange }: Props) => (
  <TextareaAutosize
    className={cn(s.textarea, className, { [s.resize]: resize })}
    value={value}
    maxRows={maxRows}
    minRows={minRows}
    onChange={onChange}
    placeholder={placeholder}
  />
);
