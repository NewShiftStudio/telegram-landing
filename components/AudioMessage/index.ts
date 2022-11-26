import dynamic from 'next/dynamic';

const AudioMessage = dynamic(import('./AudioMessage'), {
  ssr: false,
});

export default AudioMessage;
