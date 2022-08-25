import { Station } from "@/interfaces/station";
import { List, ListItem, ListItemIcon, ListItemText, ListSubheader, Paper } from "@mui/material";

type Props = {
  name: string;
  lines: string[]
}
export const CurrentStation: React.FC<Props> = ({ name, lines }) => {
  return (
    <Paper>
      <List
        subheader={
          <ListSubheader>
            {name}駅が通っている路線の一覧
          </ListSubheader>
        }
      >
        {lines.map(name => (
          <ListItem key={name}>
            <ListItemText primary={name} />
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}
