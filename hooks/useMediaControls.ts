import { RefObject, useEffect, useLayoutEffect, useRef, useState } from 'react';

import { formatSeconds } from 'utils/formatSeconds';

type MediaControlsOptions = {
  autoplay?: boolean;
};

export function useMediaControls(
  mediaRef: RefObject<HTMLVideoElement | HTMLAudioElement>,
  options?: MediaControlsOptions,
) {
  const [timer, setTimer] = useState('');
  const [progress, setProgress] = useState(0);

  const [isPlayed, setIsPlayed] = useState<boolean>(false);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const onLoadedMetadata = () => {
      setTimer(formatSeconds(mediaRef.current?.duration || 0));
    };

    if (mediaRef.current) {
      mediaRef.current.onloadedmetadata = onLoadedMetadata;
      mediaRef.current.onloadeddata = onLoadedMetadata;
    }
  }, [mediaRef]);

  useEffect(() => {
    const draw = () => {
      if (!mediaRef?.current) {
        cancelAnimationFrame(animationRef.current);
        return;
      }

      animationRef.current = requestAnimationFrame(draw);
      const { duration, currentTime } = mediaRef.current;
      const timeLeft = Math.round(duration - currentTime);
      const newProgress = Math.floor((currentTime / duration) * 100);
      const formattedTimeLeft = formatSeconds(timeLeft);

      if (newProgress !== progress) setProgress(newProgress);
      if (formattedTimeLeft !== timer) setTimer(formattedTimeLeft);

      if (!mediaRef.current.loop && timeLeft === 0) {
        cancelAnimationFrame(animationRef.current);
      }
    };
    if (!isPlayed) {
      cancelAnimationFrame(animationRef.current);
    } else {
      animationRef.current = requestAnimationFrame(draw);
    }
  }, [isPlayed]);

  useEffect(() => {
    if (!mediaRef.current) return;

    if (options?.autoplay) {
      setIsPlayed(true);
      mediaRef.current.muted = false;
      mediaRef.current.play();
    }
  }, [mediaRef, options]);

  const togglePlayer = () => {
    if (!mediaRef?.current) return;
    if (mediaRef.current.paused) {
      mediaRef.current.play();
      setIsPlayed(true);
    } else {
      mediaRef.current.pause();
      setIsPlayed(false);
    }
  };

  return { isPlayed, timer, progress, togglePlayer };
}
