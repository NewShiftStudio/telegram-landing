import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export function useRouterLoading() {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleRouterChangeStart = () => setIsLoading(true);
    const handleRouterChangeComplete = () => setIsLoading(false);

    router.events.on('routeChangeStart', handleRouterChangeStart);
    router.events.on('routeChangeComplete', handleRouterChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouterChangeStart);
      router.events.off('routeChangeComplete', handleRouterChangeComplete);
    };
  }, [setIsLoading, router.events]);

  return { isLoading };
}
