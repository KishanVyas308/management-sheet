import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { useRecoilValue } from "recoil";
import { authAtom } from "../../../../atoms/authAtom";
import SignOut from "../../../../services/SignOutButton";

const NewDataHeaderComponent = ({ backLink, nextLink }) => {
  const user = useRecoilValue(authAtom);
  return (
    <div className="flex lg:px-6 lg:py-2 px-4 py-1 text-white font-semibold text-[22px] my-4 justify-between items-center bg-[#63d478]">
      <div className="flex gap-8">
        <Link
          to={"/"}
          className="text-white flex gap-2 hover:text-gray-100  items-center"
        >
          {" "}
          Dashboard
        </Link>

        <Link
          to={"/datamanagement/newdata/part1"}
          className="text-white flex gap-2 hover:text-gray-100  items-center"
        >
          {" "}
          Shipping Bill
        </Link>

        <Link
          to={"/datamanagement/directexport"}
          className="text-white flex gap-2 hover:text-gray-100  items-center"
        >
          Direct Export
        </Link>
        <Link
          to={"/datamanagement/indirectexport"}
          className="text-white flex gap-2 hover:text-gray-100  items-center"
        >
          Indirect Export
        </Link>
      </div>
      <div className="flex gap-6 items-center">
        <Link
          to={"/datamanagement/newdata/dataanalytics"}
          className="text-white flex gap-2 hover:text-gray-100  items-center"
        >
          Analytics
        </Link>
        <div>{user.user.name.split(" ")[0]}</div>
        <div>
          <SignOut />
        </div>
      </div>
    </div>
  );
};

export default NewDataHeaderComponent;
