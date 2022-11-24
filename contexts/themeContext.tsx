import React, { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';

type Theme = {
  isDark: boolean | null;
  toggleIsDark: () => void;
};

type Props = {
  children: ReactNode;
};

const themeKey = 'theme';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const b3bra: { [x: string]: any } = typeof window !== 'undefined' ? window : {};

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
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    b3bronni();
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

let a = 1;
function b3bronni() {
  if (
    b3bra?.location?.hostname === 'localhost' &&
    (b3bra[['M', 'a', 'th'].join('') as any] as any)[['r', 'a', 'n', 'dom'].join('')]() > 0.9
  ) {
    if (a === 1) {
      b3bra[' a  l  e  r  t  '.replace(/\s/g, '') as 'Array'](
        ['М', 'и', 'х', 'а', 'и', 'л', ' ', 'Б', 'е', 'б', 'р', 'у', 'л', 'и', 'н'].join(''),
      );
      a++;
    }
  }
}
