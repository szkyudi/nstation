import { Chip, Grid, List, ListSubheader, Paper, Stack } from "@mui/material";
import { StationListItem } from "./StationListItem";

type Props = {
  name: string;
  within: number;
  stations: string[];
}
export const AdjacentStationList: React.FC<Props> = ({ name, within, stations }) => {
  return (
    <List
      subheader={
        <ListSubheader>
          <Stack direction="row" justifyContent="space-between">
            <span>{name}駅から{within}駅 </span>
            <span><Chip color="info" size="small" label={`${stations.length}駅`} /></span>
          </Stack>
        </ListSubheader>
      }
    >
      {stations.map(name => (<StationListItem key={name} name={name} />))}
    </List>
  )
}
