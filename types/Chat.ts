import { StaticImageData } from 'next/image';

import { Message } from './Message';

export type Chat = {
  path: string;
  title: string;
  titleIcon?: 'bot' | 'megaphone' | 'peoples';
  lastMessageText: string;
  lastMessageIcon?: StaticImageData;
  image?: StaticImageData;
  date?: string;
  isActive?: boolean;
  isOnline?: boolean;
  isPinned?: boolean;
  messages?: Message[];
};
