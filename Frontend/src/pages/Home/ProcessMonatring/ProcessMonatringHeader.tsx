import React from "react";
import SignOut from "../../../services/SignOutButton";
import { useRecoilValue } from "recoil";
import { authAtom } from "../../../atoms/authAtom";
import { Link } from "react-router-dom";
import { IoCaretUpCircleSharp } from "react-icons/io5";

const ProcessMonatringHeader = () => {
    const user = useRecoilValue(authAtom);
  return (
    <div className="flex w-full">
      <div className="m-4">
        <img
          src="https://udhyog4.co.in/Images/logo.png"
          className="h-[80px] object-contain"
          alt="logo"
        />
      </div>

      <div className="flex flex-col justify-between   w-full ">
        <div className="flex justify-between w-full px-4 bg-[#faa954] text-white text-[20px] font-semibold  p-2 items-center">
          {" "}
          <div>Turbo Cast (India) Private Limited - Rajkot</div>
          <div className="flex gap-6 items-center">
          <div>{(user.user.name).split(" ")[0]}</div>
          <div className="text-[28px]">
            <SignOut />
          </div>
        </div>
        </div>
        <div className="flex justify-between w-full bg-[#5dc072] text-white text-[20px] font-semibold  p-2 items-center">
          {" "}
          <div className="flex gap-6 items-center">
            <div className="underline cursor-pointer" >ProcessMonatring</div>
            <Link to={"/"} className="text-white flex gap-2 items-center cursor-pointer">Dashboard</Link>
          </div>
          <div className="flex gap-6 items-center">
          
          <Link to={"/"} className="text-[28px] cursor-pointer">
            <IoCaretUpCircleSharp />
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessMonatringHeader;
