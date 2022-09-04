import { atomFamily, MutableSnapshot, selectorFamily, useRecoilStateLoadable } from "recoil";
import { v4 as uuidv4 } from "uuid";
import { getAdjacentStations } from "../api/getAdjacentStations";
import { getStationsByName } from "../api/getStationsByName";
import { useLoading } from "./loading";

const nearStationListState = atomFamily<string[][], string>({
  key: uuidv4(),
  default: selectorFamily({
    key: uuidv4(),
    get: (name) => async () => {
      const currentStations = await getStationsByName(name);
      const adjacentStations = getAdjacentStations(currentStations);
      return [adjacentStations];
    }
  })
});

export const useStations = (name: string) => {
  const [loadable, setNearStationList] = useRecoilStateLoadable(nearStationListState(name));
  const { isLoading, startLoad, finishLoad } = useLoading('stationsLoadMore');

  const initializeState = (adjacentStationList: string[]) => ({ set }: MutableSnapshot) => {
    set(nearStationListState(name), [adjacentStationList]);
  };

  const loadMore = async () => {
    startLoad();
    if (loadable.state === 'hasValue' && 0 < loadable.contents.length && loadable.contents.length < 3) {
      const targetStationList = loadable.contents[loadable.contents.length - 1];
      if (targetStationList) {
        const adjacentStationSet: Set<string> = new Set();
        for (const name of targetStationList) {
          const currentStations = await getStationsByName(name);
          for (const station of currentStations) {
            station.prev && adjacentStationSet.add(station.prev);
            station.next && adjacentStationSet.add(station.next);
          }
        }
        const existStations = new Set(loadable.contents.flat());
        existStations.add(name);
        for (const station of Array.from(existStations)) {
          adjacentStationSet.delete(station);
        }
        setNearStationList(prevState => [...prevState, Array.from(adjacentStationSet)]);
      }
    }
    finishLoad();
  }

  return { initializeState, loadable, loadMore, isLoading };
}
