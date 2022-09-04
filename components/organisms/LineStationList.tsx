import { Station } from "@/interfaces/station";
import { Chip, List, ListSubheader, Stack } from "@mui/material";
import { StationListItem } from "./StationListItem";

type Props = {
  name: string;
  stations: Station[];
}
export const LineStationList: React.FC<Props> = ({ name, stations }) => {
  return (
    <List
      subheader={
        <ListSubheader>
          <Stack direction="row" justifyContent="space-between">
            <span>{name}に存在する駅の一覧</span>
            <span><Chip color="info" size="small" label={`${stations.length}駅`} /></span>
          </Stack>
        </ListSubheader>
      }
    >
      {stations.map(station => (<StationListItem key={station.name} name={station.name} />))}
    </List>
  )
}
