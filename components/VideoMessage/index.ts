import dynamic from 'next/dynamic';

const VideoMessage = dynamic(import('./VideoMessage'), {
  ssr: false,
});

export default VideoMessage;
