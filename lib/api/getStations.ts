import { APP_URL } from "@/constants";
import { GetStationRequest, GetStationResponse } from "@/interfaces/api/getStations";
import { Station } from "@/interfaces/station";

export async function getStations(params: GetStationRequest): Promise<Station[]> {
  const url = new URL(`${APP_URL}/api/stations`);
  for (const [key, value] of Object.entries(params)) {
    value && url.searchParams.set(key, value);
  }
  const res = await fetch(url.toString());
  const data: GetStationResponse = await res.json();
  return data.response.station;
}
