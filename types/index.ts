import { User } from '~/model/user';

type AuthInfo = {
  access_token: string;
  token_type: string;
  expires_in: string;
  scope: string;
};

export type ConnectResponse = {
  auth: AuthInfo;
  user: User;
};
