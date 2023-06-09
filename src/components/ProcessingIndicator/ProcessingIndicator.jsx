import React from "react";
import { ScaleLoader } from "react-spinners";
const ProcessingIndicator = () => {
  return (
    <div>
      <div className="w-[100%] h-[100%] bg-black bg-opacity-40 mx-auto absolute top-0">
        <div className="mt-60">
          <ScaleLoader className="" color="#36d7b7" />
          <span className="text-emerald-400 font-medium opacity-90 text-2xl">
            Processing...
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProcessingIndicator;
