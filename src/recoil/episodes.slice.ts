import { selector, selectorFamily } from 'recoil';

import { api } from '@/services/api';

export type Episode = {
  id: number;
  name: string;
  episode: string;
  characters: string[];
  url: string;
};

export const episodesSelector = selector<Episode[]>({
  key: 'episodes-selector',
  get: async ({ get }) => {
    try {
      const { data } = await api.get('/episode');

      return data.results;
    } catch (e) {
      return e;
    }
  },
});

export const getCurrentEpisode = selectorFamily<Episode, string>({
  key: 'getCurrentEpisode',
  get: (episode_id) => async () => {
    try {
      const { data } = await api.get(`/episode/${episode_id}`);

      return data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },
});
