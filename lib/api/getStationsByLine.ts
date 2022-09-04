import { Station } from "@/interfaces/station";
import { getStations } from "./getStations";

export async function getStationsByLine(line: string): Promise<Station[]> {
  return await getStations({
    method: 'getStations',
    line: line
  });
}
