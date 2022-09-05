import { Chip, Grid } from "@mui/material";
import Link from "next/link";
import { popularPrLines } from "@/lib/data/popularPrLines";

export const PopularPrLineChips: React.FC = () => {
  return (
    <Grid container spacing={0.5}>
      {popularPrLines.map(name => (
        <Grid item key={name}>
          <Link href={`/lines/${name}`}>
            <Chip
              clickable
              component="a"
              variant="outlined"
              label={name}
            />
          </Link>
        </Grid>
      ))}
    </Grid>
  )
}
