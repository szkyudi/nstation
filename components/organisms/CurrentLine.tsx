import { Station } from "@/interfaces/station";
import { List, ListItem, ListItemText, ListSubheader, Paper } from "@mui/material";

type Props = {
  name: string;
  stations: Station[]
}
export const CurrentLine: React.FC<Props> = ({ name, stations }) => {
  return (
    <Paper>
      <List
        subheader={
          <ListSubheader>
            {name}に存在する駅の一覧
          </ListSubheader>
        }
      >
        {stations.map(station => (
          <ListItem key={station.name}>
            <ListItemText primary={station.name} />
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}
