import { Box, CircularProgress, Container, Grid, Typography } from "@mui/material";
import { CurrentStation } from "../organisms/CurrentStation";
import { Header } from "../organisms/Header"
import { AdjacentStationList } from "../organisms/AdjacentStationList";
import { useStations } from "@/lib/states/stations";
import { AdjacentStationLoadMore } from "../organisms/AdjacentStationLoadMore";
import { Footer } from "../organisms/Footer";
import { theme } from "@/lib/styles/theme";

type Props = {
  name: string;
  lines: string[];
}
export const StationDetail: React.FC<Props> = ({ name, lines }) => {
  const { loadable } = useStations(name);

  return (
    <Box sx={{
      backgroundColor: theme.palette.background.default,
      minHeight: '100vh'
    }}>
      <Header isLoading={loadable.state === 'loading'} />
      <Container>
        <Box py={3}>
          <Box mb={2}>
            <Typography mb={1} variant="h6" component="h2">{name}駅</Typography>
            <CurrentStation name={name} lines={lines} />
          </Box>
          {loadable.state === 'hasValue' && loadable.contents.length > 0 && (
            <Grid
              container
              spacing={1}
              alignItems="stretch"
            >
              {loadable.contents.map((stations, index) => (
                <AdjacentStationList
                  key={JSON.stringify(stations)}
                  within={index + 1}
                  name={name}
                  stations={stations}
                />
              ))}
              {loadable.contents.length < 3 && (
                <AdjacentStationLoadMore name={name} />
              )}
            </Grid>
          )}
        </Box>
      </Container>
      <Footer />
    </Box>
  )
}
