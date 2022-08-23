import { Station } from "@/interfaces/station";
import { List, ListItem, ListItemIcon, ListItemText, ListSubheader, Paper } from "@mui/material";

type Props = {
  name: string;
  list: Station[]
}
export const CurrentStation: React.FC<Props> = ({ name, list }) => {
  return (
    <Paper>
      <List
        subheader={
          <ListSubheader>
            {name}駅が通っている路線の一覧
          </ListSubheader>
        }
      >
        {list.map(station => (
          <ListItem key={station.line}>
            <ListItemText primary={station.line} />
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}
