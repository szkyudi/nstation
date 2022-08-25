import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";

export const Footer = () => (
  <Box py={4}>
    <Container>
      <Typography align="center" variant="caption" component="p">
        このサービスは HeartRails Express を利用しています
      </Typography>
    </Container>
  </Box>
)
