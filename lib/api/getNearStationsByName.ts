import { getAdjacentStationsByName } from "./getAdjacentStationsByName";

export async function getNearStationsByName(within: number, name: string): Promise<string[][]> {
  const nearStations: string[][] = [[name]];
  for (let i = 0; i < within; i++) {
    const stations = new Set<string>();
    for (const name of nearStations[i]) {
      const adjacentStations = await getAdjacentStationsByName(name);
      adjacentStations.forEach(name => {
        let exist = false;
        for (let j = 0; j < i; j++) {
          if (nearStations[j].includes(name)) {
            exist = true;
          }
        }
        if (exist === false) {
          stations.add(name);
        }
      });
    }
    nearStations.push(Array.from(stations));
  }
  return nearStations;
}
