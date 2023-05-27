import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";

const Id365 = () => {
  return (
    <div className="flex justify-evenly pb-4 ">
      <div className="flex items-center w-96 justify-evenly">
        <FaRegCopyright />
        <h3>2023 </h3>
        <Link>Masjid Birr al-Walidayn</Link>
        <h3>All Rights Reserved</h3>
      </div>
      <div className="flex w-72 justify-evenly">
        <h3>Powered by:</h3>
        <Link className="text-neon">Idesign365</Link>
      </div>
    </div>
  );
};

export default Id365;
