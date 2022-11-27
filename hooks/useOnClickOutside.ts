import { RefObject, useEffect } from 'react';

type ClickOutsideEvent = MouseEvent | TouchEvent;

export function useOnClickOutside(ref: RefObject<HTMLElement>, handler: (event: ClickOutsideEvent) => void) {
  useEffect(() => {
    const listener = (event: ClickOutsideEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}
