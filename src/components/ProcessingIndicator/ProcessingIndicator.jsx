import React from "react";
import { ScaleLoader } from "react-spinners";
const ProcessingIndicator = () => {
  return (
    <>
      <div className="w-full h-[100%] bg-slate-800 bg-opacity-80 absolute top-0 left-0 z-10">
        <div className="">
          <ScaleLoader className="" color="#36d7b7" />
          <span className="text-emerald-400 font-medium opacity-90 text-2xl">
            Processing...
          </span>
        </div>
      </div>
    </>
  );
};

export default ProcessingIndicator;
