import { API_URL } from "@/constants"
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const url = new URL(API_URL);
  for (const key in req.query) {
    const value = req.query[key];
    value && typeof value === 'string' && url.searchParams.set(key, value);
  }
  const response = await fetch(url.toString());
  const data = await response.json();
  res.status(200).json(data);
}
