import { Station } from "@/interfaces/station";
import { Paper } from "@mui/material";
import { LineStationList } from "./LineStationList";

type Props = {
  name: string;
  stations: Station[]
}
export const CurrentLine: React.FC<Props> = ({ name, stations }) => {
  return (
    <Paper>
      <LineStationList name={name} stations={stations} />
    </Paper>
  )
}
