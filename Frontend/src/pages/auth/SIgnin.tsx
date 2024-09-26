import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { authAtom } from "../../atoms/authAtom";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import Loading from "../components/Loading";
import { BACKEND_URL } from "../../Globle";
import { jwtDecode } from "jwt-decode";

export interface User {
  id: number;
  email: string;
  name: string;
}

const Signin: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useRecoilState(authAtom);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [cookies, setCookie] = useCookies(["token"]);

  const validation = () => {
    if (username === "" || password === "") {
      alert("Please fill all the fields");
      return false;
    } else {
      return true;
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validation()) {
      return;
    }

    setLoading(true);

    const res = await axios.post(`${BACKEND_URL}/auth/login`, {
      email: username,
      password: password,
    });
    if (res.data.token) {
      const user = jwtDecode<User>(res.data.token);
      setAuth({
        isAuthenticated: true,
        user: user,
      });
      setCookie("token", res.data.token);
      setLoading(false);
      navigate("/");
    } else {
      setLoading(false);
      alert(res.data.message);
    }
  };

  async function setUp() {
    if (cookies.token && auth.isAuthenticated == false) {
      const user = jwtDecode<User>(cookies.token);
      setAuth({
        isAuthenticated: true,
        user: user,
      });
      navigate("/");
    }
  }

  useEffect(() => {
    setUp();
  }, []);

  return (
    <div className=" min-h-screen p-8 bg-gray-200">
      {loading && <Loading />}
      <div className="w-full  border-2  p-3 h-40 flex items-center justify-between bg-white">
        <div className="px-8">
          <img
            src="https://udhyog4.co.in/Images/logo.png"
            className="h-[100px]"
            alt="logo"
          />
        </div>
        <div className="px-8">
          <img
            src="http://udhyog4.in/Udhyog-40-Website/assets/img/process_monitoring/overview/logo_adjacent.png"
            className="h-[100px]"
            alt="logo"
          />
        </div>
      </div>

      <div className="flex flex-row  p-10 my-4 justify-center w-full h-full ">
        <div className="flex-1 text-xl max-w-[50%] p-5">
          Udhyog 4.0 (U4) is a start-up initiation by professionals in 2019, and
          mainly provides technological solutions related to emerging
          technologies such as Industry 4.0. This in turn transform existing
          industrial setup into SMART and sustainable manufacturing setup.
        </div>
        <div className="flex-1 p-5 max-w-[500px]">
          <div className="mb-4">
            <div className="flex items-center mb-3 bg-green-50 border border-black rounded-full px-4 py-2">
              <span className="text-green-600 mr-2">&#128100;</span>
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent flex-1 focus:outline-none text-sm"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex items-center bg-green-50 border border-black rounded-full px-4 py-2">
              <span className="text-green-600 mr-2">&#128274;</span>
              <input
                type="password"
                placeholder="Password"
                className="bg-transparent flex-1 focus:outline-none text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex justify-between items-center mb-6 mt-2 text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-1" />
                Remember Me
              </label>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Forgot Password
              </a>
            </div>

            <div className="flex flex-col space-y-4">
              <button
                className="w-full py-2 text-white bg-green-500 rounded-full hover:bg-green-600"
                onClick={handleLogin}
              >
                Sign In
              </button>
              <button
                className="w-full py-2 text-white bg-green-500 rounded-full hover:bg-green-600"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center p-4 my-4 justify-center text-xs w-full h-full">
        <div>Copyright © 2020 </div> <div> Udhyog 4.0 LLP</div>
      </div>
    </div>
  );
};

export default Signin;
