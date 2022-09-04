import { Station } from "@/interfaces/station";
import { atomFamily, MutableSnapshot, selectorFamily, useRecoilValueLoadable } from "recoil";
import { v4 as uuidv4 } from "uuid";
import { getStationsByLine } from "../api/getStationsByLine";

const linesState = atomFamily<Station[], string>({
  key: uuidv4(),
  default: selectorFamily({
    key: uuidv4(),
    get: (name) => async () => {
      return await getStationsByLine(name);
    }
  })
});

export const useLines = (name: string) => {
  const loadable = useRecoilValueLoadable(linesState(name));

  const initializeState = (stations: Station[]) => ({ set }: MutableSnapshot) => {
    set(linesState(name), stations);
  };

  return { initializeState, loadable };
}
