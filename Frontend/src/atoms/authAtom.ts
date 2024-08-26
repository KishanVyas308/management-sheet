// src/atoms/authAtom.ts
import { atom } from 'recoil';

export const authAtom = atom({
  key: 'authAtom', // unique ID (with respect to other atoms/selectors)
  default: {
    isAuthenticated: false,
    user: '',
  },
});
