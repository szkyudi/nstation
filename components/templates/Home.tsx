import { Box, Container, Grid, Typography } from "@mui/material";
import { Header } from "../organisms/Header"
import { Footer } from "../organisms/Footer";
import { theme } from "@/lib/styles/theme";
import { popularStations } from "@/lib/data/popularStations";
import { popularJrLines } from "@/lib/data/popularJrLines";
import { popularPrLines } from "@/lib/data/popularPrLines";
import { PopularStationChips } from "../organisms/PopularStationChips";
import { Seo } from "../atoms/Seo";
import dynamic, { DynamicOptions } from "next/dynamic";

const PopularPrLineChips = dynamic(import("../organisms/PopularPrLineChips").then(mod => mod.PopularPrLineChips) as DynamicOptions<{lines: string[]}>, {});
const PopularJrLineChips = dynamic(import("../organisms/PopularJrLineChips").then(mod => mod.PopularJrLineChips) as DynamicOptions<{lines: string[]}>, {});

export const Home: React.FC = () => {
  return (
    <Box sx={{
      backgroundColor: theme.palette.background.default,
      minHeight: '100vh'
    }}>
      <Seo type='website' />
      <Header />
      <Container>
        <Box mt={4} component="section">
          <Box mb={1}>
            <Typography mb={1} variant="h6" component="h2">利用者数が多い駅のランキング</Typography>
          </Box>
          <Grid
            container
            spacing={1}
          >
            <Grid item xs={12}>
              <PopularStationChips stations={popularStations} />
            </Grid>
          </Grid>
        </Box>
        <Box mt={3} component="section">
          <Box mb={1}>
            <Typography mb={1} variant="h6" component="h2">利用者数が多いJR線のランキング</Typography>
          </Box>
          <Grid
            container
            spacing={1}
          >
            <Grid item xs={12}>
              <PopularJrLineChips lines={popularJrLines} />
            </Grid>
          </Grid>
        </Box>
        <Box mt={3} component="section">
          <Box mb={1}>
            <Typography mb={1} variant="h6" component="h2">利用者数が多い私鉄の一覧</Typography>
          </Box>
          <Grid
            container
            spacing={1}
          >
            <Grid item xs={12}>
              <PopularPrLineChips lines={popularPrLines} />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </Box>
  )
}
