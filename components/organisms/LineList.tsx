import { Chip, List, ListSubheader, Stack } from "@mui/material";
import { LineListItem } from "./LineListItem";

type Props = {
  name: string;
  lines: string[];
}
export const LineList: React.FC<Props> = ({ name, lines }) => {
  return (
    <List
      subheader={
        <ListSubheader>
          <Stack direction="row" justifyContent="space-between">
            <span>{name}駅が通っている路線の一覧</span>
            <span><Chip color="info" size="small" label={`${lines.length}本`} /></span>
          </Stack>
        </ListSubheader>
      }
    >
      {lines.map(name => (<LineListItem key={name} name={name} />))}
    </List>
  )
}
