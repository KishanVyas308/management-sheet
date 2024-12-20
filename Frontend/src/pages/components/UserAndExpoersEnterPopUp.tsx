import React from 'react';
import { useRecoilValue } from 'recoil';
import { authAtom } from '../../atoms/authAtom';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useState } from 'react';
import 'tailwindcss/tailwind.css';

import { useEffect,  } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
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

const UserAndExpoersEnterPopUp = ({ open, handleClose }: { open: boolean, handleClose: () => void }) => {
    const user = useRecoilValue(authAtom);
    const [showRegister, setShowRegister] = useState(false);
    const [showExporter, setShowExporter] = useState(false);

    const handleGoback = () => {
        setShowRegister(false);
        setShowExporter(false);
    }

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle className='flex justify-between'>  <span>Create New</span> <div>{showRegister || showExporter ? <div className='cursor-pointer' onClick={handleGoback}> Go Back </div> : <></>  }</div></DialogTitle>
                <DialogContent>
                {showRegister ? <Register handleGoback={handleGoback} /> :  showExporter ? <Exporter handleGoback={handleGoback}  /> : 
                
                    <div className="flex flex-col space-y-4">
                        <Button variant="contained" color="primary" onClick={() => setShowRegister(true)}>
                            Create New User
                        </Button>
                      
                        <Button variant="contained" color="secondary" onClick={() => setShowExporter(true)}>
                            Create New Client
                        </Button>
                    </div>
                    } 
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};


const Register = ({handleGoback } : {handleGoback : () => void}) => {
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
    const res = await axios.post(`${BACKEND_URL}/add/user`, 
      {
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
    }, 
    {
      headers: {
        Authorization: cookies.token,
        
      },
    });

    alert(res.data.message);
    setLoading(false);
     
  };

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, [])

  return (
    <div className="h-[70vh]  bg-gray-200">
      {loading && <Loading />}
    

      <div className="flex flex-col  my-4 justify-center w-full h-full ">
    
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

const Exporter = ({ handleGoback }: { handleGoback: () => void }) => {
  const [loading, setLoading] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [mobileNumber1, setMobileNumber1] = useState("");
  const [mobileNumber2, setMobileNumber2] = useState("");
  const [mobileNumber3, setMobileNumber3] = useState("");
  const [mailId1, setMailId1] = useState("");
  const [mailId2, setMailId2] = useState("");
  const [mailId3, setMailId3] = useState("");
  const [firmPan, setFirmPan] = useState("");
  const [gstNo, setGstNo] = useState("");
  const [iecNo, setIecNo] = useState("");
  const [industryCategory, setIndustryCategory] = useState("");
  const [subIndustryCategory, setSubIndustryCategory] = useState("");
  const [iemUdyam, setIemUdyam] = useState("");

  const [cookies, setCookie] = useCookies(["token"]);
  const user = useRecoilValue(authAtom);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await axios.post(`${BACKEND_URL}/add/exporter`, {
      customerName,
      mobileNumber1,
      mobileNumber2,
      mobileNumber3,
      mailId1,
      mailId2,
      mailId3,
      firmPan,
      gstNo,
      iecNo,
      industryCategory,
      subIndustryCategory,
      iemUdyam,
      addedByUserId: user.user.id,
    }, 
    {
      headers: {
      Authorization: cookies.token,
      },
    });

    // alert(res.data.message);

    alert(res.data.message);
    console.log(res.data.message);
    
    setLoading(false);
  };

  return (
    <div className="h-[70vh] bg-gray-100 p-4 rounded-lg shadow-lg">
      {loading && <Loading />}
      <div className="flex flex-col my-4 w-full h-full">
        <div>
          <div className="w-full p-8 rounded-md bg-white shadow-md">
            <h2 className="text-4xl text-center border-b-2 mb-6">Register Client</h2>
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <FontAwesomeIcon icon={faUser} className="absolute left-3 top-3 text-green-500" />
                  <input
                    type="text"
                    placeholder="Customer Name"
                    className="pl-10 p-2 w-full border border-gray-300 rounded-lg"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <FontAwesomeIcon icon={faPhone} className="absolute left-3 top-3 text-green-500" />
                  <input
                    type="text"
                    placeholder="Mobile Number 1"
                    className="pl-10 p-2 w-full border border-gray-300 rounded-lg"
                    value={mobileNumber1}
                    onChange={(e) => setMobileNumber1(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <FontAwesomeIcon icon={faPhone} className="absolute left-3 top-3 text-green-500" />
                  <input
                    type="text"
                    placeholder="Mobile Number 2"
                    className="pl-10 p-2 w-full border border-gray-300 rounded-lg"
                    value={mobileNumber2}
                    onChange={(e) => setMobileNumber2(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <FontAwesomeIcon icon={faPhone} className="absolute left-3 top-3 text-green-500" />
                  <input
                    type="text"
                    placeholder="Mobile Number 3"
                    className="pl-10 p-2 w-full border border-gray-300 rounded-lg"
                    value={mobileNumber3}
                    onChange={(e) => setMobileNumber3(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-3 text-green-500" />
                  <input
                    type="email"
                    placeholder="Mail ID 1"
                    className="pl-10 p-2 w-full border border-gray-300 rounded-lg"
                    value={mailId1}
                    onChange={(e) => setMailId1(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-3 text-green-500" />
                  <input
                    type="email"
                    placeholder="Mail ID 2"
                    className="pl-10 p-2 w-full border border-gray-300 rounded-lg"
                    value={mailId2}
                    onChange={(e) => setMailId2(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-3 text-green-500" />
                  <input
                    type="email"
                    placeholder="Mail ID 3"
                    className="pl-10 p-2 w-full border border-gray-300 rounded-lg"
                    value={mailId3}
                    onChange={(e) => setMailId3(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <FontAwesomeIcon icon={faBuilding} className="absolute left-3 top-3 text-green-500" />
                  <input
                    type="text"
                    placeholder="Firm Pan"
                    className="pl-10 p-2 w-full border border-gray-300 rounded-lg"
                    value={firmPan}
                    onChange={(e) => setFirmPan(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <FontAwesomeIcon icon={faPercent} className="absolute left-3 top-3 text-green-500" />
                  <input
                    type="text"
                    placeholder="GST No."
                    className="pl-10 p-2 w-full border border-gray-300 rounded-lg"
                    value={gstNo}
                    onChange={(e) => setGstNo(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <FontAwesomeIcon icon={faBuilding} className="absolute left-3 top-3 text-green-500" />
                  <input
                    type="text"
                    placeholder="IEC No."
                    className="pl-10 p-2 w-full border border-gray-300 rounded-lg"
                    value={iecNo}
                    onChange={(e) => setIecNo(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <FontAwesomeIcon icon={faBuilding} className="absolute left-3 top-3 text-green-500" />
                  <input
                    type="text"
                    placeholder="Industry Category"
                    className="pl-10 p-2 w-full border border-gray-300 rounded-lg"
                    value={industryCategory}
                    onChange={(e) => setIndustryCategory(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <FontAwesomeIcon icon={faBuilding} className="absolute left-3 top-3 text-green-500" />
                  <input
                    type="text"
                    placeholder="Sub-Industry Category"
                    className="pl-10 p-2 w-full border border-gray-300 rounded-lg"
                    value={subIndustryCategory}
                    onChange={(e) => setSubIndustryCategory(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <FontAwesomeIcon icon={faBuilding} className="absolute left-3 top-3 text-green-500" />
                  <input
                    type="text"
                    placeholder="IEM / Udyam"
                    className="pl-10 p-2 w-full border border-gray-300 rounded-lg"
                    value={iemUdyam}
                    onChange={(e) => setIemUdyam(e.target.value)}
                  />
                </div>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-green-500 text-white p-2 rounded-lg w-full">
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



export default UserAndExpoersEnterPopUp;