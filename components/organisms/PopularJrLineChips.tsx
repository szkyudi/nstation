import { Avatar, Chip, Grid } from "@mui/material";
import { grey } from "@mui/material/colors";
import Link from "next/link";
import { popularJrLines } from "@/lib/data/popularJrLines";

export const PopularJrLineChips: React.FC = () => {
  return (
    <Grid container spacing={0.5}>
      {popularJrLines.map((name, index) => (
        <Grid item key={name}>
          <Link href={`/lines/${name}`}>
            <Chip
              clickable
              component="a"
              variant="outlined"
              avatar={<Avatar sx={{ background: grey[300]}}>{index + 1}</Avatar>}
              label={name.replace('JR', '')}
            />
          </Link>
        </Grid>
      ))}
    </Grid>
  )
}
