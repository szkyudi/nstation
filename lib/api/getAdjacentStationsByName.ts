import { GetStationRequest } from "@/interfaces/api/getStations";
import { getStations } from "./getStations";
import { getStationsByName } from "./getStationsByName";

export async function getAdjacentStationsByName(name: string): Promise<string[]> {
  const currentStations = await getStationsByName(name);
  const adjacentStations = new Set<string>();
  currentStations.forEach(station => {
    station.prev && adjacentStations.add(station.prev);
    station.next && adjacentStations.add(station.next);
  });
  return Array.from(adjacentStations);
}
