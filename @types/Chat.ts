import { StaticImageData } from 'next/image';

export type Chat = {
  path: string;
  title: string;
  titleIcon?: string;
  lastMessageText: string;
  lastMessageIcon?: StaticImageData;
  image?: StaticImageData;
  date?: string;
  isActive?: boolean;
  isOnline?: boolean;
  isPinned?: boolean;
};
