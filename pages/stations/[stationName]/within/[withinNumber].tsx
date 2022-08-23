import { getNearStationsByName } from '@/lib/api/getNearStationsByName';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring';

interface Props {
  nearStations: string[][]
}

interface Params extends ParsedUrlQuery {
  stationName: string;
  withinNumber: string;
}
export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const nearStations = await getNearStationsByName(Number(params!.withinNumber), params!.stationName);

  if (Number(params!.withinNumber) && Number(params!.withinNumber) > 5) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      nearStations
    },
    revalidate: 60 * 60 * 24 * 7 // 7days
  }
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: true
});

const StationPage: NextPage<Props> = ({ nearStations }) => {
  if (nearStations) {
    return (
      <div>
        {nearStations.map((stations, index) => {
          return (
            <ul key={index}>
              {stations.map((name, index) => (
                <li key={index}>{name}</li>
              ))}
            </ul>
          )
        })}
      </div>
    )
  } else {
    return <p>駅が見つかりませんでした。</p>
  }
}

export default StationPage
