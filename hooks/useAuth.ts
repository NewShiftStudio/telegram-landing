import { useContext } from 'react';

import { AuthContext } from 'contexts/authContext';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (typeof context === 'undefined') throw new Error('Use hook inside AuthContext');

  return context;
};
