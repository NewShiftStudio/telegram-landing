import React, { memo, useRef } from 'react';

import { useMediaControls } from 'hooks/useMediaControls';

import s from './AudioMessage.module.scss';

import wawe from 'assets/icons/AudioWawe.svg';

type Props = {
  audio?: string;
};

const AudioMessage = memo(({ audio }: Props) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const { timer, isPlayed, progress, togglePlayer } = useMediaControls(audioRef);

  return (
    <div className={s.audioMessage}>
      <button type='button' className={s.button} onClick={togglePlayer}>
        {isPlayed ? (
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='#ffffff' viewBox='0 0 16 16'>
            <path d='M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z' />
          </svg>
        ) : (
          <svg width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M16.361 8.24996C17.3457 8.79127 17.3457 10.2062 16.361 10.7475L6.86146 15.9695C5.91178 16.4916 4.75 15.8045 4.75 14.7208L4.75 4.27664C4.75 3.19292 5.91178 2.50582 6.86146 3.02788L16.361 8.24996Z'
              fill='white'
            />
          </svg>
        )}
      </button>

      <div className={s.content}>
        <div className={s.wawe}>
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <audio ref={audioRef} className={s.video}>
            <source src={audio} />
          </audio>
          <div className={s.progress} style={{ WebkitMaskImage: `url(${wawe.src})`, maskImage: `url(${wawe.src})` }}>
            <div className={s.progressBar} style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className={s.bottom}>
          <div className={s.timer}>{timer}</div>
        </div>
      </div>
    </div>
  );
});

export default AudioMessage;
