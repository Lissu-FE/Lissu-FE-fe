import { atom } from 'recoil';

export const userName = atom({
  key: 'userName',
  default: '',
});

export const infiniteScrollY = atom({
  key: 'infiniteScrollY',
  default: 0,
});
