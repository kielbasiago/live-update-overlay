import { User } from '~/model/user';

type AuthInfo = {
  access_token: string | null;
  token_type: string | null;
  expires_in: string | null;
  scope: string | null;
};

export type ConnectResponse = {
  auth: AuthInfo;
  user: User;
};

export type Standing = {
  name: string;
  matchesPlayed: number;
  wins: number;
  draws: number;
  losses: number;
  gatesFinished: number;
  hitsTaken: number;
  points: number;
  lastFive: ('win' | 'loss' | 'draw')[];
};
