import { Station } from "@/interfaces/station";
import { Box, Container, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Header } from "../organisms/Header"

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
      </Container>
    </Box>
  )
}
