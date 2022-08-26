import { Station } from "@/interfaces/station";
import { getStations } from "./getStations";

export async function getStationsByName(name: string): Promise<Station[]> {
  return await getStations({
    method: 'getStations',
    name: name
  });
}
