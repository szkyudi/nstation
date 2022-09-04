import { Box, Container, Typography } from "@mui/material";
import { Header } from "../organisms/Header"
import { Footer } from "../organisms/Footer";
import { theme } from "@/lib/styles/theme";
import { useLines } from "@/lib/states/lines";
import { CurrentLine } from "../organisms/CurrentLine";

type Props = {
  name: string;
}
export const LineDetail: React.FC<Props> = ({ name }) => {
  const { loadable } = useLines(name);

  return (
    <Box sx={{
      backgroundColor: theme.palette.background.default,
      minHeight: '100vh'
    }}>
      <Header isLoading={loadable.state === 'loading'} />
      <Container>
        <Box py={3}>
          <Box mb={2}>
            <Typography mb={1} variant="h6" component="h2">{name}</Typography>
            {loadable.state === 'hasValue' && <CurrentLine name={name} stations={loadable.contents} />}
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  )
}
