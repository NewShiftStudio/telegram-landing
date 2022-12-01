import React, { ReactNode, useCallback, useMemo, useState } from 'react';

type AuthContextType = {
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
};

type Props = {
  children: ReactNode;
};

export const AuthContext = React.createContext({} as AuthContextType);

export const AuthProvider = ({ children }: Props) => {
  const [isAuth, setIsAuth] = useState(false);

  const auth = useMemo(
    () => ({
      isAuth,
      setIsAuth,
    }),
    [isAuth, setIsAuth],
  );

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
