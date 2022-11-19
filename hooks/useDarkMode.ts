import { useContext } from 'react';

import { ThemeContext } from '../contexts/themeContext';

export const useDarkMode = () => {
  const context = useContext(ThemeContext);
  if (typeof context === 'undefined') throw new Error('Use ThemeContext');

  return context;
};
