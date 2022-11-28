import { StaticImageData } from 'next/image';

import { File } from './File';

export type BaseMessage = {
  id: number;
  createdAt?: string;
  type: 'message' | 'video' | 'audio';
};

export type Message = BaseMessage & {
  type: 'message';
  text?: string;
  image?: string | StaticImageData;
  video?: string;
  isOutgoing?: boolean;
  link?: MessageLink;
  withTail?: boolean;
  files?: File[];
};

export type VideoMessage = BaseMessage & {
  type: 'video';
  video: string;
};

export type AudioMessage = BaseMessage & {
  type: 'audio';
  audio: string;
};

export type ChatMessages = (Message | AudioMessage | VideoMessage)[];

export type MessageLink = {
  title: string;
  href: string;
};
