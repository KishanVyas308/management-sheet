import React from "react";

const Loading = () => {
  return (
    <div className="flex fixed z-50 top-0 left-0 bottom-0 right-0 w-screen h-screen items-center justify-center bg-black bg-opacity-10">
      <div className="animate-spin rounded-full h-14 w-14 border-t-2 border-b-2 border-green-700"></div>
    </div>
  );
};

export default Loading;
