import { useStations } from "@/lib/states/stations";
import { Box, Button, Grid, Paper } from "@mui/material";

type Props = {
  name: string;
}
export const AdjacentStationLoadMore: React.FC<Props> = ({ name }) => {
  const { loadMore } = useStations(name);
  return (
    <Grid item xs={12} md={4}>
      <Paper sx={{ height: '100%'}}>
        <Box p={1} sx={{ height: '100%', boxSizing: 'border-box' }}>
          <Button
            sx={{ width: '100%', height: '100%' }}
            size="large"
            onClick={loadMore}
          >
            さらに隣の駅を読み込む
          </Button>
        </Box>
      </Paper>
    </Grid>
  )
}
