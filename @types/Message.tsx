export type Message = {
  id: number;
  createdAt: string;
  type: 'text' | 'link';
};

export type TextMessage = Message & {
  type: 'text';
  text?: string;
  image?: string;
  isOutgoing: boolean;
};

export type LinkMessage = Message & {
  type: 'link';
  href: string;
  title: string;
};
