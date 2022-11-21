import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export type Message = {
  id: number;
  createdAt?: string;
  text?: string;
  image?: string | StaticImageData;
  video?: string;
  isOutgoing?: boolean;
  link?: MessageLink;
};

export type MessageLink = {
  title: string;
  href: string;
};
