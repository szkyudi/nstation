import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#666ad1",
      main: "#303f9f",
      dark: "#001970",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#4f5b62",
      main: "#263238",
      dark: "#000a12",
      contrastText: "#ffffff",
    },
    background: {
      default: grey[50],
    },
  },
});
