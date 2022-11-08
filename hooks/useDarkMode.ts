import { useCallback, useEffect, useState } from 'react';

const themeKey = 'theme';

const themeMode = {
  DARK: 'dark',
  LIGHT: 'light',
};

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem(themeKey) === themeMode.DARK ||
      (!(themeKey in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem(themeKey, themeMode.DARK);
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem(themeKey, themeMode.LIGHT);
    }
  }, [isDark]);

  const toggleDark = useCallback(() => {
    setIsDark(prevState => !prevState);
  }, []);

  return {
    isDark,
    toggleDark,
  };
};
