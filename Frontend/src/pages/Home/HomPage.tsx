import React, {  useState } from "react";
import Header from "../components/Header";
import DetailCard from "../components/DetailCard";
import SignOut from "../../services/SignOutButton";
import { useRecoilValue } from "recoil";
import { authAtom, Role } from "../../atoms/authAtom";
import UserAndExpoersEnterPopUp from "../components/UserAndExpoersEnterPopUp";





const HomePage: React.FC = () => {
  const user = useRecoilValue(authAtom);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <div className="bg-[#e6e7e9] w-screen h-screen lg:p-10 p-5">
      <UserAndExpoersEnterPopUp open={open} handleClose={handleClose} />
      <Header />

      <div className="flex lg:px-10 lg:py-4 px-6 py-4 text-white font-semibold text-[28px] my-10 justify-between items-center bg-[#63d478]">
        <div className="underline">Dashboard</div>
        <div className="flex gap-6 items-center">
          <div className="cursor-pointer " onClick={() => {
            user.user.role === Role.ADMIN ? handleClickOpen() : alert("You are not authorized")
          }}>{user.user.name.split(" ")[0]}</div>
          <div>
            <SignOut />
          </div>
        </div>
      </div>

      <div className="flex gap-8 justify-between">
        <DetailCard
          link={"/admin"}
          title={"Process Monitoring"}
          color={"bg-[#faaa55]"}
          description={
            "Track, measure and monitor entire process, purchase to dispatch and from production to management level."
          }
          imageSrc={
            "../src/images/process_monitoring.png"
          }
        />

        <DetailCard
          link={"/datamanagement"}
          title={"Data Management"}
          color="bg-[#f5874f]"
          description={
            "Connect, and manage the data collected from systems, sensors, machines and people like never before"
          }
          imageSrc={
            "../src/images/data_management.png"
          }
        />
      </div>
    </div>
  );
};

export default HomePage;
