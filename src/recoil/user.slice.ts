import { parseCookies, setCookie, destroyCookie } from 'nookies';
import { atom, AtomEffect } from 'recoil';

type User = {
  name: string;
  lastname: string;
  age: number;
  email: string;
  avatarUrl: string;
};

const persisteLocalStorageEffect: AtomEffect<User> = ({ onSet, setSelf }) => {
  const key = '@recoil-next:user';
  const cookies = parseCookies();

  const storageUser = cookies[key];

  if (storageUser) {
    setSelf(JSON.parse(storageUser));
  }

  onSet((changedUser, _, isReset) => {
    isReset
      ? destroyCookie(null, key)
      : setCookie(null, key, JSON.stringify(changedUser));
  });
};

export const userSlice = atom<User>({
  key: 'atom-userSlice',
  default: {
    name: 'Carlos',
    age: 41,
    email: 'carlos@gmail.com',
    lastname: 'Junior',
    avatarUrl: 'https://avatars.githubusercontent.com/u/48535259?v=4',
  },

  effects_UNSTABLE: [persisteLocalStorageEffect],
});
