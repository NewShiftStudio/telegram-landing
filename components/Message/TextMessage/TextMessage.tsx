import React from 'react';

type Props = {
  text?: string;
  photo?: string;
  type: 'incoming' | 'outgoing'; // входящее/исходящее
};

const TextMessage = ({ text, photo, type }: Props) => <div>TextMessage</div>;
