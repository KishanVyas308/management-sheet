// src/atoms/authAtom.ts
import { atom } from 'recoil';

interface Auth {
  isAuthenticated: boolean;
  user: {
    id: number;
    email: string;
    name: string;
  };
}

export const authAtom = atom<Auth>({
  key: 'authAtom', // unique ID (with respect to other atoms/selectors)
  default: {
    isAuthenticated: false,
    user: {
      id: 0,
      email: '',
      name: '',
    },
  },
});