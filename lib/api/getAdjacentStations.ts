import { Station } from "@/interfaces/station";

export function getAdjacentStations(stations: Station[]): string[] {
  const nextStations = new Set<string>();
  stations.forEach(station => {
    station.prev && nextStations.add(station.prev);
    station.next && nextStations.add(station.next);
  });
  return Array.from(nextStations);
}
