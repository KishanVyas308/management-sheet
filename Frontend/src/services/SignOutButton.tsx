import React from "react";
import { useCookies } from "react-cookie";
import { useRecoilState } from "recoil";
import { authAtom } from "../atoms/authAtom";
import { FaPowerOff } from "react-icons/fa";

const SignOut = () => {
  const [cookies, setCookie] = useCookies(["token"]);
  const [auth, setAuth] = useRecoilState(authAtom);

  const signOutHandle = () => {
    setAuth({
      isAuthenticated: false,
      user: {
        id: 0,
        email: "",
        name: "",
      },
    });
    setCookie("token", "");
  };
  return (
    <div className="cursor-pointer">
      <FaPowerOff onClick={signOutHandle} />
    </div>
  )
};

export default SignOut;



