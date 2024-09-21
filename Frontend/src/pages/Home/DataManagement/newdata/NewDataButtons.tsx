import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";

const NewDataButtons = ({ backLink, nextLink, handleSubmit }) => {
  return (
    <div className="flex justify-between">
        <div className="flex gap-2">

         <Link
          to={backLink}
          className="bg-green-500 relative flex gap-1  hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg bottom-0 right-0"
          >
          {" "}
          <div className="mt-1">
            <IoMdArrowRoundBack />
          </div>
          Back
        </Link>{" "}
        <Link
          to={nextLink}
          className="bg-green-500 relative flex gap-1 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg bottom-0 right-0"
          >
          {" "}
          Next
          <div className="mt-1">
            <IoMdArrowRoundForward />
          </div>
        </Link>
            </div>
      <button
        className="bg-green-500 relative  hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg bottom-0 right-0"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default NewDataButtons;
