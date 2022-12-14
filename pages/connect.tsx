import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { User } from '~/model/user';
import { ConnectResponse } from '~/types';
import { useProfile } from '~/utils/AuthProvider';

const useAuthConnect = () => {
  const router = useRouter();
  const fragment = new URLSearchParams(router.asPath.split('#')[1]);
  const access_token = fragment.get('access_token');
  const token_type = fragment.get('token_type');
  const expires_in = fragment.get('expires_in');
  const scope = fragment.get('scope');

  return useQuery<ConnectResponse>(['auth-connect', access_token, token_type, expires_in, scope], async () => {
    const auth = { access_token, token_type, expires_in, scope };
    const { data } = await axios.post<User>('/api/auth/connect', auth);
    const user = data;
    return { auth, user };
  });
};

export default function Connect() {
  const router = useRouter();
  const { isLoading, data } = useAuthConnect();
  const { setUser } = useProfile();

  useEffect(() => {
    if (data) {
      setUser(data.user);
      router.push('/ds3/standings');

      window.sessionStorage.setItem('_er_at', `${data.auth.access_token}`);
    }
  }, [data, router, setUser]);

  return <>{isLoading && 'SHOW SPINNING BUTTON'}</>;
}
