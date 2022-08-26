import { Box, Container } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Header } from "../organisms/Header"

export const StationDetail: React.FC = () => {
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
