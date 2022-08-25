import { Box, Container, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { CurrentStation } from "../organisms/CurrentStation";
import { Header } from "../organisms/Header"
import { AdjacentStationList } from "../organisms/AdjacentStationList";

type Props = {
  name: string;
  lines: string[];
  adjacentStations: string[]
}
export const StationDetail: React.FC<Props> = ({ name, lines, adjacentStations }) => {
  return (
    <Box sx={{
      backgroundColor: grey[50]
    }}>
      <Header />
      <Container>
        <Box py={3}>
          <Box mb={2}>
            <Typography mb={1} variant="h6" component="h2">{name}駅</Typography>
            <CurrentStation name={name} lines={lines} />
          </Box>
          {adjacentStations.length > 0 ? (
            <Grid
              container
              spacing={1}
            >
              <AdjacentStationList within={1} name={name} stations={adjacentStations} />
            </Grid>
          ):(
            <p>隣接する駅が見つかりませんでした。</p>
          )}
        </Box>
      </Container>
    </Box>
  )
}
