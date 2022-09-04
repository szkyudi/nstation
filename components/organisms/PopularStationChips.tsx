import { theme } from "@/lib/styles/theme";
import { Avatar, Chip, Grid, useMediaQuery } from "@mui/material";
import { grey } from "@mui/material/colors";
import Link from "next/link";

type Props = {
  stations: string[];
}
export const PopularStationChips: React.FC<Props> = ({ stations }) => {
  const isUpperSm = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Grid container spacing={0.5}>
      {stations.map((name, index) => (
        <Grid item key={name}>
          <Link href={`/stations/${name}`}>
            <Chip
              clickable
              component="a"
              variant="outlined"
              size={isUpperSm ? 'medium' : 'small'}
              avatar={<Avatar sx={{ background: grey[300]}}>{index + 1}</Avatar>}
              label={name}
            />
          </Link>
        </Grid>
      ))}
    </Grid>
  )
}
