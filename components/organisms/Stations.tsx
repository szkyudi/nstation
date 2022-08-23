import Link from "next/link";

type Props = {
  stations: string[];
}
export const Stations: React.FC<Props> = ({ stations }) => {
  return (
    <ul>
      {stations.map((name, index) => (
        <li key={index}>
          <Link href={`/stations/${name}`}>
            <a>{name}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
