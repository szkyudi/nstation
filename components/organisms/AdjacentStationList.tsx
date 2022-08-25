import { OpenInNew } from "@mui/icons-material";
import { Grid, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Paper } from "@mui/material";
import Link from "next/link";

type Props = {
  name: string;
  within: number;
  stations: string[];
}
export const AdjacentStationList: React.FC<Props> = ({ name, within, stations }) => {
  return (
    <Grid item xs={12} md={4}>
      <Paper>
        <List
          sx={{
            maxHeight: 600,
            overflow: 'auto'
          }}
          subheader={
            <ListSubheader>
              {name}駅から{within}駅
            </ListSubheader>
          }
        >
          {stations.map(name => (
            <Link key={name} href={`/stations/${name}`} passHref>
              <ListItemButton component="a" target="_blank" rel="noreferrer">
                <ListItemIcon>
                  <OpenInNew />
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
