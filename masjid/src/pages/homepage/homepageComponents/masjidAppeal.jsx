import React from "react";
import masjidside from "./masjidside.jpg";
import { Link } from "react-router-dom";

const MasjidAppeal = () => {
  return (
    <div className="mt-20 mb-4">
      <div className="font-serif">
        <h2 className="text-4xl uppercase">Masjid Appeal</h2>
        <h3 className="text-2xl pt-4">lets help build a masjid</h3>
        <div className="px-4 pt-6 ">
          <Link to="masjidProject">
            <img src={masjidside} alt={masjidside} />
          </Link>
          <div className="bg-gray-100 py-10 ">
            <h2 className="font-semibold text-xl uppercase ">
              buy a brick or two
            </h2>
            <h3 className="pt-2 text-lg text-center px-6">
              Establish a masjid in the city of Cairo
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

export default MasjidAppeal;
