import React from "react";
import Forms from "./forms";
import { FaAngleDoubleDown, FaAngleDoubleRight } from "react-icons/fa";

const Main = () => {
  return (
    <div className="text-magnolia bg-eerie h-screen md:h-full">
      <h2 className="text-5xl pt-12 font-bold underline">Contact Us</h2>
      <div className="flex pt-24 pl-12  md:flex-col md:pl-0">
        <div className="w-2/4 flex flex-col items-start md:w-screen">
          <h2 className="text-4xl font-bold md:pl-4">Get in touch</h2>
          <h3 className="text-start w-2/3 pt-12 md:w-screen md:text-start md:px-4 md:pb-4">
            Please note we are very busy, and run by volunteers. So there maybe
            a delay in response, if we are able to help.
          </h3>
          <div className=" h-4 text-center w-full mt-12 flex md:hidden">
            <FaAngleDoubleRight className="text-5xl font-thin animate-bounce text-vergi " />
            <FaAngleDoubleRight className="text-5xl font-thin animate-bounce text-vergi" />
            <FaAngleDoubleRight className="text-5xl font-thin animate-bounce text-vergi" />
          </div>
        </div>
        <Forms />
      </div>
    </div>
  );
};

export default Main;
