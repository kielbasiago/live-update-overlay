import React, { useContext } from 'react';
import { User } from '~/model/user';

export type AuthProviderData = {
  user: User | null;
  setUser: (user: User) => void;
};

const Context = React.createContext<AuthProviderData>({
  setUser() {
    return;
  },
  user: null
});

export const useProfile = () => {
  const context = useContext(Context);
  return context;
};

export const AuthProvider = Context.Provider;
