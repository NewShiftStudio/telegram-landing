import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export function useRouterLoading() {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    console.log('rerender');
    router.events.on('routeChangeStart', () => {
      setIsLoading(true);
    });
    router.events.on('routeChangeComplete', () => {
      setIsLoading(false);
    });
  }, [setIsLoading]);

  return { isLoading };
}
