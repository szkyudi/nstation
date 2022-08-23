import { Station } from "@/interfaces/station";
import { Box, Container, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { CurrentStation } from "../organisms/CurrentStation";
import { Header } from "../organisms/Header"
import { NearStationList } from "../organisms/NearStationList";

type Props = {
  name: string;
  list: Station[];
  nearStations: string[][]
}
export const StationDetail: React.FC<Props> = ({ name, list, nearStations }) => {
  return (
    <Box sx={{
      backgroundColor: grey[50]
    }}>
      <Header />
      <Container>
        <Box py={3}>
          <Box mb={2}>
            <Typography mb={1} variant="h6" component="h2">{name}駅</Typography>
            <CurrentStation name={name} list={list} />
          </Box>
          {nearStations.length >= 1 ? (
            <NearStationList currentStationName={name} stations={nearStations.slice(1)} />
          ):(
            <p>隣接する駅が見つかりませんでした。</p>
          )}
        </Box>
      </Container>
    </Box>
  )
}
