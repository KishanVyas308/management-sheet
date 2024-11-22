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
                            Create New Exporter
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
    const [exporterName, setExporterName] = useState("");
    const [exporterAddress, setExporterAddress] = useState("");
    const [type, setType] = useState("");
    const [adCode, setAdCode] = useState("");
    const [cbName, setCbName] = useState("");
    const [forexBankAc, setForexBankAc] = useState([""]);
    const [dbkBankAcNo, setDbkBankAcNo] = useState([""]);

    const [cookies, setCookie] = useCookies(["token"]);
    const user = useRecoilValue(authAtom);

    const addForexBankAc = () => {
        if (forexBankAc.length < 5) {
            setForexBankAc([...forexBankAc, ""]);
        }
    };

    const addDbkBankAcNo = () => {
        if (dbkBankAcNo.length < 5) {
            setDbkBankAcNo([...dbkBankAcNo, ""]);
        }
    };

    const removeForexBankAc = (index) => {
        const newForexBankAc = forexBankAc.filter((_, i) => i !== index);
        setForexBankAc(newForexBankAc);
    };

    const removeDbkBankAcNo = (index) => {
        const newDbkBankAcNo = dbkBankAcNo.filter((_, i) => i !== index);
        setDbkBankAcNo(newDbkBankAcNo);
    };

    const handleForexBankAcChange = (index, value) => {
        const newForexBankAc = [...forexBankAc];
        newForexBankAc[index] = value;
        setForexBankAc(newForexBankAc);
    };

    const handleDbkBankAcNoChange = (index, value) => {
        const newDbkBankAcNo = [...dbkBankAcNo];
        newDbkBankAcNo[index] = value;
        setDbkBankAcNo(newDbkBankAcNo);
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        // Add your validation and API call logic here
        setLoading(true);
        const res = await axios.post(`${BACKEND_URL}/add/exporter`, {
            exporterName,
            exporterAddress,
            type,
            adCode,
            cbName,
            forexBankAc,
            dbkBankAcNo,
            addedByUserId: user.user.id,
        }, 
        {
          headers: {
            Authorization: cookies.token,
          },
        });


        alert(res.data.message);
        setLoading(false);

    };

    return (
        <div className="h-[70vh] bg-gray-200">
            {loading && <Loading />}
            <div className="flex flex-col my-4  w-full h-full">
                <div>
                    <div className="w-full p-8 rounded-md">
                        <h2 className="text-4xl text-center border-b-2 mb-6">Register Exporter</h2>
                        <form onSubmit={handleRegister} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="relative">
                                    <FontAwesomeIcon icon={faUser} className="absolute left-3 top-3 text-green-500" />
                                    <input
                                        type="text"
                                        placeholder="Exporter Name"
                                        className="pl-10 p-2 w-full border border-gray-300 rounded-lg"
                                        value={exporterName}
                                        onChange={(e) => setExporterName(e.target.value)}
                                    />
                                </div>
                                <div className="relative">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="absolute left-3 top-3 text-green-500" />
                                    <input
                                        type="text"
                                        placeholder="Exporter Address"
                                        className="pl-10 p-2 w-full border border-gray-300 rounded-lg"
                                        value={exporterAddress}
                                        onChange={(e) => setExporterAddress(e.target.value)}
                                    />
                                </div>
                                <div className="relative">
                                    <FontAwesomeIcon icon={faBuilding} className="absolute left-3 top-3 text-green-500" />
                                    <input
                                        type="text"
                                        placeholder="Type"
                                        className="pl-10 p-2 w-full border border-gray-300 rounded-lg"
                                        value={type}
                                        onChange={(e) => setType(e.target.value)}
                                    />
                                </div>
                                <div className="relative">
                                    <FontAwesomeIcon icon={faPercent} className="absolute left-3 top-3 text-green-500" />
                                    <input
                                        type="text"
                                        placeholder="AD Code"
                                        className="pl-10 p-2 w-full border border-gray-300 rounded-lg"
                                        value={adCode}
                                        onChange={(e) => setAdCode(e.target.value)}
                                    />
                                </div>
                                <div className="relative">
                                    <FontAwesomeIcon icon={faBuilding} className="absolute left-3 top-3 text-green-500" />
                                    <input
                                        type="text"
                                        placeholder="CB Name"
                                        className="pl-10 p-2 w-full border border-gray-300 rounded-lg"
                                        value={cbName}
                                        onChange={(e) => setCbName(e.target.value)}
                                    />
                                </div>
                            </div>
                            {forexBankAc.map((account, index) => (
                                <div key={index} className="relative">
                                    <FontAwesomeIcon icon={faBuilding} className="absolute left-3 top-3 text-green-500" />
                                    <input
                                        type="text"
                                        placeholder="Forex Bank Ac"
                                        className="pl-10 p-2 w-full border border-gray-300 rounded-lg"
                                        value={account}
                                        onChange={(e) => handleForexBankAcChange(index, e.target.value)}
                                    />
                                    <button type="button" className="absolute right-3 top-3 text-red-500" onClick={() => removeForexBankAc(index)}>Remove</button>
                                </div>
                            ))}
                            {forexBankAc.length < 5 && (
                                <div className="text-center">
                                    <button type="button" className="bg-blue-500 text-white p-2 rounded-lg w-full" onClick={addForexBankAc}>
                                        Add Another Forex Bank Ac
                                    </button>
                                </div>
                            )}
                            {dbkBankAcNo.map((account, index) => (
                                <div key={index} className="relative">
                                    <FontAwesomeIcon icon={faBuilding} className="absolute left-3 top-3 text-green-500" />
                                    <input
                                        type="text"
                                        placeholder="DBK Bank Ac No."
                                        className="pl-10 p-2 w-full border border-gray-300 rounded-lg"
                                        value={account}
                                        onChange={(e) => handleDbkBankAcNoChange(index, e.target.value)}
                                    />
                                    <button type="button" className="absolute right-3 top-3 text-red-500" onClick={() => removeDbkBankAcNo(index)}>Remove</button>
                                </div>
                            ))}
                            {dbkBankAcNo.length < 5 && (
                                <div className="text-center">
                                    <button type="button" className="bg-blue-500 text-white p-2 rounded-lg w-full" onClick={addDbkBankAcNo}>
                                        Add Another DBK Bank Ac No.
                                    </button>
                                </div>
                            )}
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