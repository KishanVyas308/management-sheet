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
           Dashbord
        </Link>
        {/* <Link
          to={backLink}
          className="text-white flex gap-2 hover:text-gray-100  items-center"
        >
          {" "}
          <div className="mt-1">
            <IoMdArrowRoundBack />
          </div>
          Back
        </Link>{" "} */}
        {/* <Link
          to={nextLink}
          className="text-white flex gap-2 hover:text-gray-100  items-center"
        >
          {" "}
          Next
          <div className="mt-1">
            <IoMdArrowRoundForward />
          </div>
        </Link> */}
        <Link
          to={"/datamanagement/newdata/part1"}
          className="text-white flex gap-2 hover:text-gray-100  items-center"
        >
          {" "}
          Part 1
        </Link>
        <Link
          to={"/datamanagement/newdata/part2"}
          className="text-white flex gap-2 hover:text-gray-100  items-center"
        >
          {" "}
          Part 2
        </Link>
        <Link
          to={"/datamanagement/newdata/part3"}
          className="text-white flex gap-2 hover:text-gray-100  items-center"
        >
          {" "}
          Part 3
        </Link>
        <Link
          to={"/datamanagement/newdata/part4"}
          className="text-white flex gap-2 hover:text-gray-100  items-center"
        >
          {" "}
          Part 4
        </Link>
        <Link
          to={"/datamanagement/newdata/part5"}
          className="text-white flex gap-2 hover:text-gray-100  items-center"
        >
          {" "}
          Part 5
        </Link>
      </div>
      <div className="flex gap-6 items-center">
        <Link to={"/datamanagement/newdata/dataanalytics"} className="text-white flex gap-2 hover:text-gray-100  items-center">Analytics</Link>
          <div>{(user.user.name).split(" ")[0]}</div>
          <div >
            <SignOut />
          </div>
        </div>
    </div>
  );
};

export default NewDataHeaderComponent;
