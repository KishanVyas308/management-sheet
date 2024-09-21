import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import DetailCard from "../components/DetailCard";

const HomePage: React.FC = () => {
  return (
    <div className="bg-[#e6e7e9] w-screen h-screen lg:p-10 p-5">
      <Header />

      <div className="flex lg:px-10 lg:py-4 px-6 py-4 text-white font-semibold text-[28px] my-10 justify-between items-center bg-[#63d478]">
        <div>User</div>
        <div>Home</div>
        <div>Sign Out</div>
      </div>

      <div className="flex gap-8 justify-between">
        <DetailCard
          link={"/"}
          title={"Process Monatring"}
          color={"#faaa55"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cumque velit eum voluptates, necessitatibus aliquid rem"
          }
          imageSrc={"https://udhyog4.co.in/Images/logo.png"}
        />

        <DetailCard
          link={"/datamanagement"}
          title={"Data Management"}
          color={"#f6874f"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cumque velit eum voluptates, necessitatibus aliquid rem"
          }
          imageSrc={"https://udhyog4.co.in/Images/logo.png"}
        />
      </div>
    </div>
  );
};

export default HomePage;
