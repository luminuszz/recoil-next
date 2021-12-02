import { atom, selector } from 'recoil';

export enum Status {
  pending = 'pending',
  success = 'success',
  error = 'error',
  normal = 'normal',
}

export type Query = {
  error: any | null;
  status: Status;
  data: any;
  id: string;
};

type ApiState = Record<string, Query>;

export const apiStateAtom = atom<ApiState>({
  key: 'atom-apiState',
  default: {},
});

export const requestKeyAtom = atom<string>({
  key: 'requestKey-atom',
  default: '',
});
