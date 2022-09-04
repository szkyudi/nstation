import { MY_APP_URL } from "@/constants";
import { GetStationRequest, GetStationResponse, isGetStationResponse } from "@/interfaces/api/getStations";
import { Station } from "@/interfaces/station";

export async function getStations(params: GetStationRequest): Promise<Station[]> {
  const url = new URL(`${MY_APP_URL}/api/stations`);
  for (const [key, value] of Object.entries(params)) {
    value && url.searchParams.set(key, value);
  }
  const res = await fetch(url.toString());
  const data: GetStationResponse = await res.json();
  if (isGetStationResponse(data)) {
    return data.response.station;
  } else {
    return [];
  }
}
