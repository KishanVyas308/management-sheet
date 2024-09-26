import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import DetailCard from "../components/DetailCard";
import SignOut from "../../services/SignOutButton";
import { useRecoilValue } from "recoil";
import { authAtom } from "../../atoms/authAtom";





const HomePage: React.FC = () => {
const user = useRecoilValue(authAtom);
  return (
    <div className="bg-[#e6e7e9] w-screen h-screen lg:p-10 p-5">
      <Header />

      <div className="flex lg:px-10 lg:py-4 px-6 py-4 text-white font-semibold text-[28px] my-10 justify-between items-center bg-[#63d478]">
        <div>Dashboard</div>
        <div className="flex gap-6 items-center">
          <div>{(user.user.name).split(" ")[0]}</div>
          <div >
            <SignOut />
          </div>
        </div>
      </div>

      <div className="flex gap-8 justify-between">
        <DetailCard
          link={"/"}
          title={"Process Monatring"}
          color={"bg-[#faaa55]"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cumque velit eum voluptates, necessitatibus aliquid rem"
          }
          imageSrc={"http://udhyog4.in/Udhyog-40-Website/assets/img/process_monitoring/overview/process_monitoring.png"}
        />

        <DetailCard
          link={"/datamanagement"}
          title={"Data Management"}
          color="bg-[#f5874f]"
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cumque velit eum voluptates, necessitatibus aliquid rem"
          }
          imageSrc={"http://udhyog4.in/Udhyog-40-Website/assets/img/process_monitoring/overview/data_management.png"}
        />
      </div>
    </div>
  );
};

export default HomePage;
