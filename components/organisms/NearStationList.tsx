import { ExpandMore, OpenInNew } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Paper, Stack, Typography } from "@mui/material";
import Link from "next/link";

type Props = {
  currentStationName: string;
  stations: string[][];
}
export const NearStationList: React.FC<Props> = ({ currentStationName, stations }) => {
  return (
    <Grid
      container
      spacing={1}
    >
      {stations.map((list, index) => (
        <Grid key={index} item xs={12} md={4}>
          <Paper>
            <List
              sx={{
                maxHeight: 600,
                overflow: 'auto'
              }}
              subheader={
                <ListSubheader>
                  {currentStationName}駅から{index + 1}駅
                </ListSubheader>
              }
            >
              {list.map(name => (
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
      ))}
    </Grid>
  )
}
