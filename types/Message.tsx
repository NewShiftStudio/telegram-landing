import { StaticImageData } from 'next/image';

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
