import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import DetailCard from "../../components/DetailCard";
import { IoMdArrowRoundBack } from "react-icons/io";

const DataManagementPage: React.FC = () => {
  return (
    <div className="bg-[#e6e7e9] w-screen h-screen lg:p-10 p-5">
      <Header />

      <div className="flex lg:px-10 lg:py-4 px-6 py-4 text-white font-semibold text-[28px] my-10 justify-between items-center bg-[#63d478]">
        <Link to={"/"} className="text-white flex gap-2 items-center"> <IoMdArrowRoundBack />Home</Link>
        <div>Sign Out</div>
      </div>

      <div className="flex gap-8 justify-between">
    
        <DetailCard
          link={"/datamanagement/newdata/part1"}
          title={"New Data"}
          color={"#faaa55"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cumque velit eum voluptates, necessitatibus aliquid rem"
          }
          imageSrc={"https://udhyog4.co.in/Images/logo.png"}
        />

        <DetailCard
          link={"/datamanagement/existingdata"}
          title={"Existing Data"}
          color={"#faaa55"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cumque velit eum voluptates, necessitatibus aliquid rem"
          }
          imageSrc={"https://udhyog4.co.in/Images/logo.png"}
        />
 
      </div>
    </div>
  );
};

export default DataManagementPage;
