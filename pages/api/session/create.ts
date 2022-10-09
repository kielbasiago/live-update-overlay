// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export type Data = {
  playerOneName: string;
  playerTwoName: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  /* 
    1) Create Session
    2) Store in local cache
  */
  res.status(200).json({});
}
