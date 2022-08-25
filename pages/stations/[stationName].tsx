import { StationDetail } from '@/components/templates/StationDetail';
import { Station } from '@/interfaces/station';
import { getAdjacentStations } from '@/lib/api/getAdjacentStations';
import { getStationsByName } from '@/lib/api/getStationsByName';
import type { GetServerSideProps, GetStaticPaths, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring';

interface Props {
  name: string;
  lines: string[];
  adjacentStations: string[];
}

interface Params extends ParsedUrlQuery {
  stationName: string;
}
export const getServerSideProps: GetServerSideProps<Props, Params> = async ({ params }) => {
  const name = params?.stationName;
  if (name === undefined) {
    return {
      notFound: true
    }
  }
  const currentStations = await getStationsByName(name);
  if (currentStations.length === 0) {
    return {
      notFound: true
    }
  }
  const lines = currentStations.map(station => station.line);
  const adjacentStations = getAdjacentStations(currentStations);

  return {
    props: { name, lines, adjacentStations },
    // revalidate: 60 * 60 * 24 * 7 // 7days
  }
}

const StationPage: NextPage<Props> = ({ name, lines, adjacentStations }) => (
  <StationDetail name={name} lines={lines} adjacentStations={adjacentStations} />
)

export default StationPage
