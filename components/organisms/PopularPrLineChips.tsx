import { theme } from "@/lib/styles/theme";
import { Chip, Grid, useMediaQuery } from "@mui/material";
import Link from "next/link";

type Props = {
  lines: string[];
}
export const PopularPrLineChips: React.FC<Props> = ({ lines }) => {
  const isDownSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container spacing={1}>
      {lines.map(name => (
        <Grid item key={name}>
          <Link href={`/lines/${name}`}>
            <Chip
              clickable
              component="a"
              variant="outlined"
              size={isDownSm ? 'small' : 'medium'}
              label={name}
            />
          </Link>
        </Grid>
      ))}
    </Grid>
  )
}
