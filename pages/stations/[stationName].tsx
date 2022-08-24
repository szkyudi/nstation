import { StationDetail } from '@/components/templates/StationDetail';
import { Station } from '@/interfaces/station';
import { getNearStationsByName } from '@/lib/api/getNearStationsByName';
import { getStationsByName } from '@/lib/api/getStationsByName';
import type { GetServerSideProps, GetStaticPaths, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring';

interface Props {
  currentStations: {
    name: string
    list: Station[]
  };
  nearStations: string[][];
}

interface Params extends ParsedUrlQuery {
  stationName: string;
}
export const getServerSideProps: GetServerSideProps<Props, Params> = async ({ params }) => {
  const currentStations = await getStationsByName(params!.stationName);
  const nearStations = await getNearStationsByName(3, params!.stationName);

  if (currentStations.length === 0) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      currentStations: {
        name: params!.stationName,
        list: currentStations
      },
      nearStations
    },
    // revalidate: 60 * 60 * 24 * 7 // 7days
  }
}

const StationPage: NextPage<Props> = ({ currentStations, nearStations }) => {
  if (nearStations) {
    return (
      <StationDetail name={currentStations.name} list={currentStations.list} nearStations={nearStations} />
    )
  } else {
    return <p>駅が見つかりませんでした。</p>
  }
}

export default StationPage
