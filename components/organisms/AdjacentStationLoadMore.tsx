import { useStations } from "@/lib/states/stations";
import { Box, Grid, Paper } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';

type Props = {
  name: string;
}
export const AdjacentStationLoadMore: React.FC<Props> = ({ name }) => {
  const { loadMore, isLoading } = useStations(name);
  return (
    <Grid item xs={12} md={4}>
      <Paper sx={{ height: '100%'}}>
        <Box p={1} sx={{ height: '100%', boxSizing: 'border-box' }}>
          <LoadingButton
            sx={{ width: '100%', height: '100%' }}
            size="large"
            onClick={loadMore}
            loading={isLoading}
          >
            さらに隣の駅を読み込む
          </LoadingButton>
        </Box>
      </Paper>
    </Grid>
  )
}
