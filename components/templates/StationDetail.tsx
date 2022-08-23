import { Station } from "@/interfaces/station";
import Link from "next/link";
import { CurrentStation } from "../organisms/CurrentStation";
import { Header } from "../organisms/Header"
import { Stations } from "../organisms/Stations";

type Props = {
  name: string;
  list: Station[];
  nearStations: string[][]
}
export const StationDetail: React.FC<Props> = ({ name, list, nearStations }) => {
  return (
    <>
      <Header />
      <CurrentStation name={name} list={list} />
      {nearStations.map((stations, index) => {
        return (
          index >= 1 && (
            <>
              <h3>{index}駅以内の駅の一覧</h3>
              <Stations stations={stations} />
            </>
          )
        )
      })}
    </>
  )
}
