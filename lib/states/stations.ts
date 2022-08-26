import { atomFamily, MutableSnapshot, useRecoilState } from "recoil";
import { RECOIL_KEYS } from ".";
import { getStationsByName } from "../api/getStationsByName";

const nearStationListState = atomFamily<string[][], string>({
  key: RECOIL_KEYS.STATION_NEAR_STATION_LIST,
  default:[]
});

export const useStations = (name: string) => {
  const [nearStationList, setNearStationList] = useRecoilState(nearStationListState(name));

  const initializeState = (adjacentStationList: string[]) => ({ set }: MutableSnapshot) => {
    set(nearStationListState(name), [adjacentStationList]);
  };

  const loadMore = async () => {
    if (0 < nearStationList.length && nearStationList.length < 3) {
      const targetStationList = nearStationList[nearStationList.length - 1];
      if (targetStationList) {
        const adjacentStationList: string[] = [];
        for (const name of targetStationList) {
          const currentStations = await getStationsByName(name);
          for (const station of currentStations) {
            station.prev && adjacentStationList.push(station.prev);
            station.next && adjacentStationList.push(station.next);
          }
        }
        setNearStationList(prevState => [...prevState, Array.from(new Set(adjacentStationList))]);
      }
    }
  }

  return { initializeState, nearStationList, loadMore };
}
