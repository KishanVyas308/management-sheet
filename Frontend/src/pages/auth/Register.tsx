import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authAtom } from "../../atoms/authAtom";
import { useCookies } from "react-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faUser,
  faMapMarkerAlt,
  faCity,
  faGlobe,
  faEnvelope,
  faPhone,
  faLock,
  faUpload,
  faPercent,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Loading from "../components/Loading";
import { BACKEND_URL } from "../../Globle";
import { jwtDecode } from "jwt-decode";
import { User } from "./SIgnin";

const Register = () => {
  const [contactPersonName, setContactPersonName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pin, setPin] = useState("");
  const [webpage, setWebpage] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gstNo, setGstNo] = useState("");
  const [companyLogo, setCompanyLogo] = useState<any>();

  const [loading, setLoading] = useState(false);

  const [cookies, setCookie] = useCookies(["token"]);

  const navigate = useNavigate();
  const [auth, setAuth] = useRecoilState(authAtom);

  const validation = () => {
    if (
      contactPersonName === "" ||
      companyName === "" ||
      city === "" ||
      country === "" ||
      phoneNumber === "" ||
      gstNo === "" ||
      email === "" || 
      state === "" || 
      pin === "" 
    ) {
      alert("Please fill all the fields");
      return false;
    } else if (password !== confirmPassword) {
      alert("Passwords do not match");
      return false;
    } else {
      return true;
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validation()) {
      return;
    }

    setLoading(true);
    const res = await axios.post(`${BACKEND_URL}/auth/signup`, {
      email: email,
      password: password,
      contactPersonName: contactPersonName,
      companyName: companyName,
      addressLine1: addressLine1,
      addressLine2: addressLine2,
      city: city,
      state: state,
      country: country,
      pin: pin,
      webpage: webpage,
      phoneNumber: phoneNumber,
      gstNo: gstNo,
      companyLogo: companyLogo,
    });

    if (res.data.token) {
      // replace with actual condition
      const user = jwtDecode<User>(res.data.token);
      setAuth({
        isAuthenticated: true,
        user: user,
      });
      setLoading(false);
      setCookie("token", res.data.token); // replace with actual token
      navigate("/");
    } else {
      setLoading(false);
      alert(res.data.message);
    }
  };

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, [])

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

      <div className="flex flex-col  p-10 my-4 justify-center w-full h-full ">
        <div className="flex-1 p-5">
          Udhyog 4.0 (U4) is a start-up initiation by professionals in 2019, and
          mainly provides technological solutions related to emerging
          technologies such as Industry 4.0. This in turn transform existing
          industrial setup into SMART and sustainable manufacturing setup.
        </div>

        <div>
          <div className="w-full  p-8  rounded-md">
            <h2 className="text-4xl text-center border-b-2 mb-6">Register</h2>
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faBuilding}
                    className="absolute left-3 top-3 text-green-500"
                  />
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="pl-10 p-2 w-full border border-gray-300 rounded-lg"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="absolute left-3 top-3 text-green-500"
                  />
                  <input
                    type="text"
                    placeholder="Contact Person Name"
                    className="pl-10 p-2 w-full border border-gray-300 rounded-lg"
                    value={contactPersonName}
                    onChange={(e) => setContactPersonName(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="absolute left-3 top-3 text-green-500"
                  />
                  <input
                    type="text"
                    placeholder="Address Line 1"
                    className="pl-10 p-2 w-full border border-gray-300 rounded-lg"
                    value={addressLine1}
                    onChange={(e) => setAddressLine1(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="absolute left-3 top-3 text-green-500"
                  />
                  <input
                    type="text"
                    placeholder="Address Line 2"
                    className="pl-10 p-2 w-full border border-gray-300 rounded-lg"
                    value={addressLine2}
                    onChange={(e) => setAddressLine2(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faCity}
                    className="absolute left-3 top-3 text-green-500"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    className="pl-10 p-2 w-full border border-gray-300 rounded-lg"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faBuilding}
                    className="absolute left-3 top-3 text-green-500"
                  />
                  <input
                    type="text"
                    placeholder="State"
                    className="pl-10 p-2 w-full border border-gray-300 rounded-lg"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faGlobe}
                    className="absolute left-3 top-3 text-green-500"
                  />
                  <input
                    type="text"
                    placeholder="Country"
                    className="pl-10 p-2 w-full border border-gray-300 rounded-lg"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="absolute left-3 top-3 text-green-500"
                  />
                  <input
                    type="text"
                    placeholder="Pin"
                    className="pl-10 p-2 w-full border border-gray-300 rounded-lg"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faGlobe}
                    className="absolute left-3 top-3 text-green-500"
                  />
                  <input
                    type="text"
                    placeholder="Webpage (if any)"
                    className="pl-10 p-2 w-full border border-gray-300 rounded-lg"
                    value={webpage}
                    onChange={(e) => setWebpage(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="absolute left-3 top-3 text-green-500"
                  />
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="pl-10 p-2 w-full border border-gray-300 rounded-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="absolute left-3 top-3 text-green-500"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="pl-10 p-2 w-full border border-gray-300 rounded-lg"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faLock}
                    className="absolute left-3 top-3 text-green-500"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="pl-10 p-2 w-full border border-gray-300 rounded-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faLock}
                    className="absolute left-3 top-3 text-green-500"
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="pl-10 p-2 w-full border border-gray-300 rounded-lg"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faPercent}
                    className="absolute left-3 top-3 text-green-500"
                  />
                  <input
                    type="text"
                    placeholder="GST No."
                    className="pl-10 p-2 w-full border border-gray-300 rounded-lg"
                    value={gstNo}
                    onChange={(e) => setGstNo(e.target.value)}
                  />
                </div>
                <div className="relative col-span-2">
                  <label className="flex items-center cursor-pointer">
                    <FontAwesomeIcon
                      icon={faUpload}
                      className="text-green-500 mr-3"
                    />
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => {
                        setCompanyLogo(e.target!.files![0]);
                      }}
                    />
                    <span>Company Logo (in jpeg, jpg, png)</span>
                  </label>
                </div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-green-500 text-white p-2 rounded-lg w-full"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
