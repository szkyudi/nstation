import { Box, Container, Grid, Typography } from "@mui/material";
import { Header } from "../organisms/Header"
import { Footer } from "../organisms/Footer";
import { theme } from "@/lib/styles/theme";
import { PopularStationList } from "../organisms/PopularStationList";
import { popularStations } from "@/lib/data/popularStations";

export const Home: React.FC = () => {
  return (
    <Box sx={{
      backgroundColor: theme.palette.background.default,
      minHeight: '100vh'
    }}>
      <Header />
      <Container>
        <Box py={3}>
          <Box mb={2}>
            <Typography mb={1} variant="h6" component="h2">利用者数が多い駅</Typography>
          </Box>
          <Grid
            container
            spacing={1}
            alignItems="stretch"
          >
            <Grid item xs={12}>
              <PopularStationList stations={popularStations} />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </Box>
  )
}
