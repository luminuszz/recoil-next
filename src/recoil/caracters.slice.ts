import { atom, selector } from 'recoil';

import { api } from '@/services/api';

export type Character = {
  status: string;
  name: string;
  species: string;
  image: string;
  id: number;
};

export const characterState = atom<Character[]>({
  key: 'characterState-atom',
  default: [],
});

export const characterIdState = atom<number | null>({
  key: 'characterIdState-atom',
  default: null,
});

export const normalizedCharacterState = selector<Character | null>({
  key: 'selector-normalizedCharacterState-characterState',
  get: async ({ get }) => {
    const id = get(characterIdState);

    if (!id) return null;

    const { data } = await api.get(`/character/${id}`);

    return data;
  },
});
