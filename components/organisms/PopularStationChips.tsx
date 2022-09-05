import { Avatar, Chip, Grid } from "@mui/material";
import { grey } from "@mui/material/colors";
import Link from "next/link";

type Props = {
  stations: string[];
}
export const PopularStationChips: React.FC<Props> = ({ stations }) => {
  return (
    <Grid container spacing={0.5}>
      {stations.map((name, index) => (
        <Grid item key={name}>
          <Link href={`/stations/${name}`}>
            <Chip
              clickable
              component="a"
              variant="outlined"
              avatar={<Avatar sx={{ background: grey[300]}}>{index + 1}</Avatar>}
              label={name}
            />
          </Link>
        </Grid>
      ))}
    </Grid>
  )
}
