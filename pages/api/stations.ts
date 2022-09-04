import { EXPRESS_API_URL } from "@/constants"
import { NextApiRequest, NextApiResponse } from "next";
import Cors from 'cors';

const cors = Cors({
  methods: ['POST', 'GET', 'HEAD']
});

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await runMiddleware(req, res, cors);
  const url = new URL(EXPRESS_API_URL);
  for (const key in req.query) {
    const value = req.query[key];
    value && typeof value === 'string' && url.searchParams.set(key, value);
  }
  const response = await fetch(url.toString());
  const data = await response.json();
  res.status(200).json(data);
}
