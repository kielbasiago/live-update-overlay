import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
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

export const useProfile = (redirectOnFail = false) => {
  const router = useRouter();
  const context = useContext(Context);
  useEffect(() => {
    if (redirectOnFail && !context.user) {
      router.replace('/');
    }
  }, [context, redirectOnFail, router]);
  return context;
};

export const AuthProvider = Context.Provider;
