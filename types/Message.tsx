import { StaticImageData } from 'next/image';

export type Message = {
  id: number;
  createdAt?: string;
  text?: string;
  image?: string | StaticImageData;
  video?: string;
  isOutgoing?: boolean;
  link?: MessageLink;
  withTail?: boolean;
};

export type MessageLink = {
  title: string;
  href: string;
};
