import { Seo } from '@/components/atoms/Seo';
import { LineDetail } from '@/components/templates/LineDetail';
import { Station } from '@/interfaces/station';
import { getStationsByLine } from '@/lib/api/getStationsByLine';
import { useLines } from '@/lib/states/lines';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring';
import { RecoilRoot } from 'recoil';

interface Props {
  name: string;
  stations: Station[];
}

interface Params extends ParsedUrlQuery {
  lineName: string;
}
export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const name = params?.lineName;
  if (name === undefined) {
    return {
      notFound: true
    }
  }
  const stations = await getStationsByLine(decodeURIComponent(name));
  if (stations.length === 0) {
    return {
      notFound: true
    }
  }

  return {
    props: { name, stations },
    revalidate: 60 * 60 * 24 * 365 // 365 days
  }
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking'
});

const StationPage: NextPage<Props> = ({ name, stations }) => {
  const { initializeState } = useLines(name);
  return (
    <RecoilRoot initializeState={initializeState(stations)}>
      <Seo title={`${name}に存在する駅の一覧`} />
      <LineDetail name={name} />
    </RecoilRoot>
  )
}

export default StationPage
