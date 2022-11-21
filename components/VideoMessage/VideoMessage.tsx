import React, { useEffect, useRef, useState } from 'react';

import { formatSeconds } from '../../utils/formatSeconds';

import s from './VideoMessage.module.scss';

type Props = {
  video?: string;
};

export const VideoMessage = ({ video }: Props) => {
  const [timing, setTiming] = useState('');
  const [isPlayed, setIsPlayed] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const animationRef = useRef<number>(0);
  useEffect(() => {
    if (!videoRef?.current) return;

    const draw = () => {
      if (!videoRef.current) {
        cancelAnimationFrame(animationRef.current);
        return;
      }
      animationRef.current = requestAnimationFrame(draw);
      const { duration, currentTime } = videoRef.current;
      const timeLeft = Math.round(duration - currentTime);

      setTiming(formatSeconds(timeLeft));

      if (timeLeft === 0) {
        cancelAnimationFrame(animationRef.current);
      }
    };

    if (!isPlayed) {
      cancelAnimationFrame(animationRef.current);
    } else {
      animationRef.current = requestAnimationFrame(draw);
    }
  }, [videoRef, isPlayed]);

  const togglePlayer = () => {
    if (!videoRef?.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlayed(true);
    } else {
      videoRef.current.pause();
      setIsPlayed(false);
    }
  };

  return (
    <div className={s.videoMessage}>
      <div className={s.videoContainer}>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video ref={videoRef} className={s.video} autoPlay loop muted>
          <source src={video} />
        </video>
        <button type='button' onClick={togglePlayer} className={s.controls}>
          <div className={s.controlsIcon}>
            {isPlayed ? (
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='#ffffff' viewBox='0 0 16 16'>
                <path d='M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z' />
              </svg>
            ) : (
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='#ffffff' viewBox='0 0 16 16'>
                <path d='m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z' />
              </svg>
            )}
          </div>
        </button>
      </div>
      <div className={s.timing}>{timing}</div>
    </div>
  );
};
