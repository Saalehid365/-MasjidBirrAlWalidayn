import React from "react";
import masjid from "../homeCom/masjid.JPG";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className="flex text-magnolia bg-eerie h-screen w-screen justify-between">
        <div className="flex flex-col justify-center h-2/3 items-star pl-12">
          <h2 className="text-7xl font-bold text-start">
            Masjid Birr al-Walidayn
          </h2>
          <p className="w-2/3 text-start pt-6 text-3xl font-serif   ">
            We cant wait to complete the masjid which will allow you to sit and
            benefit in one of the house's of Allaah
          </p>
          <Link className="text-center bg-maya w-24 text-eerie rounded-md mt-6 p-2 font-bold">
            Donate
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={masjid}
            alt="masjid"
            className="w-4/5 h-3/5 bg rounded-md  shadow-white shadow-inner "
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
