import { StationDetail } from '@/components/templates/StationDetail';
import { getAdjacentStations } from '@/lib/api/getAdjacentStations';
import { getStationsByName } from '@/lib/api/getStationsByName';
import { useStations } from '@/lib/states/stations';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring';
import { RecoilRoot } from 'recoil';

interface Props {
  name: string;
  lines: string[];
  adjacentStations: string[];
}

interface Params extends ParsedUrlQuery {
  stationName: string;
}
export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const name = params?.stationName;
  if (name === undefined) {
    return {
      notFound: true
    }
  }
  const currentStations = await getStationsByName(decodeURIComponent(name));
  if (currentStations.length === 0) {
    return {
      notFound: true
    }
  }
  const lines = currentStations.map(station => station.line);
  const adjacentStations = getAdjacentStations(currentStations);

  return {
    props: { name, lines, adjacentStations },
    revalidate: 60 * 60 * 24 * 365 // 365 days
  }
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking'
});

const StationPage: NextPage<Props> = ({ name, lines, adjacentStations }) => {
  const { initializeState } = useStations(name);
  return (
    <RecoilRoot initializeState={initializeState(adjacentStations)}>
      <StationDetail name={name} lines={lines} />
    </RecoilRoot>
  )
}

export default StationPage
