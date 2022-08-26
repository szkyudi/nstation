import LinkIcon from "@mui/icons-material/Link";
import { Chip, Grid, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Paper, Stack } from "@mui/material";
import Link from "next/link";

type Props = {
  name: string;
  within: number;
  stations: string[];
}
export const AdjacentStationList: React.FC<Props> = ({ name, within, stations }) => {
  return (
    <Grid item xs={12} md={4}>
      <Paper sx={{ overflow: 'hidden' }}>
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
          {stations.map(name => (
            <Link key={name} href={`/stations/${name}`} passHref>
              <ListItemButton component="a">
                <ListItemIcon>
                  <LinkIcon />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItemButton>
            </Link>
          ))}
        </List>
      </Paper>
    </Grid>
  )
}
