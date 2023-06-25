"use client";

import { PropagateLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      className="
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
    >
      <PropagateLoader size={30} color="#13457D" />
    </div>
  );
};

export default Loader;
