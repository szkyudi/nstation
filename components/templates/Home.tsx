import { Box } from "@mui/material";
import { Header } from "../organisms/Header"
import { Footer } from "../organisms/Footer";
import { theme } from "@/lib/styles/theme";

export const Home: React.FC = () => {
  return (
    <Box sx={{
      backgroundColor: theme.palette.background.default,
      minHeight: '100vh'
    }}>
      <Header />
      <Footer />
    </Box>
  )
}
