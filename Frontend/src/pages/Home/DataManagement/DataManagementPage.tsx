import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import DetailCard from "../../components/DetailCard";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRecoilValue } from "recoil";
import { authAtom } from "../../../atoms/authAtom";
import SignOut from "../../../services/SignOutButton";

const DataManagementPage: React.FC = () => {
  
const user = useRecoilValue(authAtom);
  return (
    <div className="bg-[#e6e7e9] w-screen h-full     min-h-screen lg:p-10 p-5">
      <Header />

      <div className="flex lg:px-10 lg:py-4 px-6 py-4 text-white font-semibold text-[28px] my-10 justify-between items-center bg-[#63d478]">
        <div className="flex gap-6 items-center"> 
          <div className="underline">Data Management</div>
        <Link to={"/"} className="text-white flex gap-2 items-center">
          {" "}
          Dashboard
        </Link>
        </div>
        <div className="flex gap-6 items-center">
          <div>{(user.user.name).split(" ")[0]}</div>
          <div >
            <SignOut />
          </div>
        </div>
      </div>

      <div className="flex gap-8 my-4 justify-between">
        <DetailCard
          link={"/datamanagement/newdata/part1"}
          title={"New Data"}
          color="bg-[#faaa55]"
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cumque velit eum voluptates, necessitatibus aliquid rem"
          }
          imageSrc={"../src/images/new_data.png"}
        />

        <DetailCard
          link={"/datamanagement/existingdata"}
          title={"Existing Data"}
          color="bg-[#f6874f]"
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cumque velit eum voluptates, necessitatibus aliquid rem"
          }
          imageSrc={"../src/images/data_management.png"}
        />
      </div>
      {/* <div className="flex gap-8 my-8 justify-between">
        <DetailCard
          link={"/datamanagement/downloaddata"}
          title={"Download Data"}
          color={"#faaa55"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cumque velit eum voluptates, necessitatibus aliquid rem"
          }
          imageSrc={"https://udhyog4.co.in/Images/logo.png"}
        />

          <div className="w-[50%]"></div>
      </div> */}
    </div>
  );
};

export default DataManagementPage;
