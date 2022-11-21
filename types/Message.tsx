import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export type Message = {
  id: number;
  createdAt?: string;
  text?: string;
  image?: string | StaticImageData;
  isOutgoing?: boolean;
  link?: MessageLink;
};

export type MessageLink = {
  title: string;
  href: string;
};
