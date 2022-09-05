import { Chip, Grid } from "@mui/material";
import Link from "next/link";

type Props = {
  lines: string[];
}
export const PopularPrLineChips: React.FC<Props> = ({ lines }) => {
  return (
    <Grid container spacing={0.5}>
      {lines.map(name => (
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
