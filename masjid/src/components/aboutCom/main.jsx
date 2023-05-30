import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../footer";

const Main = () => {
  return (
    <div className="bg-eerie h-screen text-magnolia flex flex-col items-center pt-24 ">
      <h2 className="text-5xl underline font-bold">About </h2>
      <div className="flex">
        <div className="w-2/4 flex flex-col items-start pl-24 h-96 justify-evenly pt-12 md:w-full md:px-4">
          <h2 className="text-5xl font-bold underline decoration-slate-800 md:text-4xl">
            Masjid Birr al-Walidayn
          </h2>
          <h3 className="text-start text-2xl">
            Our task is to teach, enteract and support the local community in
            6th of October City{" "}
            <Link className="underline decoration-maya cursor-pointer">
              مدينة السادس من أكتوبر
            </Link>{" "}
            inline with the Quran and Prophetic example with the understanding
            of the first 3 generations of pious Muslims.{" "}
          </h3>
          <Link
            to="/contactUs"
            className="underline flex items-center w-28 justify-between cursor-pointer md:w-36"
          >
            <h4 className="md:text-2xl ">Get in Touch</h4>
            <FaArrowAltCircleRight className="text-xs " />
          </Link>
        </div>
        <div>
          <img></img>
        </div>
      </div>
    </div>
  );
};

export default Main;
