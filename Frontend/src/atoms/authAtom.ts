// src/atoms/authAtom.ts
import { atom } from "recoil";

export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
}
interface Auth {
  isAuthenticated: boolean;
  user: {
    id: number;
    email: string;
    name: string;
    role: Role;
  };
}

export const authAtom = atom<Auth>({
  key: "authAtom", // unique ID (with respect to other atoms/selectors)
  default: {
    isAuthenticated: false,
    user: {
      id: 0,
      email: "",
      name: "",
      role: Role.USER,
    },
  },
});


