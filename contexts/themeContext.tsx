import React, { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';

type Theme = {
  isDark: boolean | null;
  toggleIsDark: () => void;
};

type Props = {
  children: ReactNode;
};

const themeKey = 'theme';

const themeMode = {
  DARK: 'dark',
  LIGHT: 'light',
};

export const ThemeContext = React.createContext({} as Theme);

export const ThemeProvider = ({ children }: Props) => {
  const [isDark, setIsDark] = useState<boolean | null>(null);

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
    if (isDark === null) return;
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem(themeKey, themeMode.DARK);
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem(themeKey, themeMode.LIGHT);
    }
  }, [isDark]);

  const toggleIsDark = useCallback(() => {
    setIsDark(prevState => !prevState);
  }, []);

  const theme = useMemo(
    () => ({
      isDark,
      toggleIsDark,
    }),
    [isDark, toggleIsDark],
  );

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};
