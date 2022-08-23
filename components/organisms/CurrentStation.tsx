import { Station } from "@/interfaces/station";

type Props = {
  name: string;
  list: Station[]
}
export const CurrentStation: React.FC<Props> = ({ name, list }) => {
  return (
    <>
      <h1>{name}</h1>
      <div>
        <h2>{name}駅から{list.length - 1}駅以内の駅の一覧</h2>
        <h3>{name}駅が通っている路線の一覧</h3>
        <ul>
          {list.map((station, index) => {
            return (
              <li key={index}>{station.line}</li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
