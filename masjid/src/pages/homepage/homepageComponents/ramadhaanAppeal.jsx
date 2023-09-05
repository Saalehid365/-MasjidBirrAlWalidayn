import React from "react";
import { Link } from "react-router-dom";

const RamadhaanAppeal = () => {
  return (
    <div className="mt-20 mb-4">
      <div className="font-serif">
        <h2 className="text-4xl uppercase">Ramadaan Appeal</h2>
        <h3 className="text-2xl pt-4 ">
          lets help the in Blessed Month of Ramadan
        </h3>
        <div className="px-4 pt-6 ">
          <img
            src="https://www.state.gov/wp-content/uploads/2023/07/shutterstock_2262409797v2.jpg"
            alt=""
          />
          <div className="bg-gray-100 py-10 ">
            <h2 className="font-semibold text-xl uppercase ">
              The reward would be multipled
            </h2>
            <h3 className="pt-2 text-lg text-center px-6">
              Suhoor and iftaar packs
            </h3>
            <div className="h-10 mt-4">
              <Link className="bg-blue-500 px-8 rounded-md py-2 text-white">
                Donate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RamadhaanAppeal;
