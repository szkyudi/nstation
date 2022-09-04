import { Paper } from "@mui/material";
import { LineList } from "./LineList";

type Props = {
  name: string;
  lines: string[]
}
export const CurrentStation: React.FC<Props> = ({ name, lines }) => {
  return (
    <Paper>
      <LineList name={name} lines={lines} />
    </Paper>
  )
}
