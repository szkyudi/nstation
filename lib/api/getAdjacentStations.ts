import { GetStationRequest } from "@/interfaces/api/getStations";
import { getStations } from "./getStations";

export async function getAdjacentStations(params: GetStationRequest): Promise<string[]> {
  const currentStations = await getStations(params);
  const adjacentStations = new Set<string>();
  currentStations.forEach(station => {
    station.prev && adjacentStations.add(station.prev);
    station.next && adjacentStations.add(station.next);
  });
  return Array.from(adjacentStations);
}
