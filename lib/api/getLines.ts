import { API_URL } from "@/constants";
import { GetLinesRequest, GetLinesResponse } from "@/interfaces/api/getLines";

export async function getLines(params: GetLinesRequest): Promise<GetLinesResponse> {
  const url = new URL(API_URL);
  for (const [key, value] of Object.entries(params)) {
    value && url.searchParams.set(key, value);
  }
  const res = await fetch(url.toString());
  return res.json();
}
