import { GetServerSideProps } from 'next';
import { useRecoilValueLoadable } from 'recoil';

import { Episode, getCurrentEpisode } from '@/recoil/episodes.slice';

interface Props {
  id: string;
}

export default function EpisodeIdPage({ id }: Props) {
  const { state, contents } = useRecoilValueLoadable(getCurrentEpisode(id));

  if (state === 'loading') {
    return <h1>caregando</h1>;
  }

  if (contents) {
    const { episode, name, characters } = contents as Episode;

    return <h1>{name}</h1>;
  }

  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id;

  return {
    props: {
      id,
    },
  };
};
