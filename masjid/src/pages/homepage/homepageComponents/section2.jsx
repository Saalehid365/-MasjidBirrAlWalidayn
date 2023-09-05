import React from "react";
import { Link } from "react-router-dom";

const Section2 = () => {
  return (
    <div className="bg-blue-400 pb-6">
      <div className=" text-white text-xl pt-6 font-semibold font-serif px-6">
        <h2 className="text-3xl">Donate to a project</h2>
        <h3 className="pt-2 font-light">
          Do not see it as a decrease in wealth
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-4 px-4 mt-6">
        <Link className="bg-white px-8 py-2">Masjid</Link>
        <Link className="bg-white px-8 py-2">Masjid</Link>
        <Link className="bg-white px-8 py-2">Masjid</Link>
        <Link className="bg-white px-8 py-2">Masjid</Link>
        <Link className="bg-white px-8 py-2">Masjid</Link>
        <Link className="bg-white px-8 py-2">Masjid</Link>
      </div>
    </div>
  );
};

export default Section2;
