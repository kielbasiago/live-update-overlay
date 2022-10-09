// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export type Params = {
  sessionId: string;
};

export type Data = {
  sessionId: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { sessionId } = req.query as Params;
  res.status(200).json({ sessionId });
}
