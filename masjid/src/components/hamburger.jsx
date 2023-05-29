import React, { useState } from "react";
import { FaListAlt, IconName } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hamburger = () => {
  const [active, setActive] = useState(false);

  const toggleNav = () => {
    setActive(!active);
  };

  return (
    <div className=" hidden md:flex md:items-start md:w-full   md:flex-col">
      <button onClick={toggleNav}>
        <FaListAlt className="text-5xl ml-4 mb-2" />
      </button>
      {active && (
        <div className="h-96 flex flex-col pt-12 justify-evenly items-start text-2xl bg-gray-500 w-full pl-4 ">
          <Link
            to="/"
            className=" cursor-pointer hover:border-b-2 hover:border-magnolia border-eerie  "
          >
            Home
          </Link>
          <Link
            to="appeal"
            className="hover: hover:border-magnolia border-eerie  cursor-pointer"
          >
            Appeal
          </Link>
          <Link
            to="waysToDonate"
            className="hover: hover:border-magnolia border-eerie  cursor-pointer"
          >
            Ways to Donate
          </Link>
          <Link
            to="about"
            className="hover: hover:border-magnolia border-eerie  cursor-pointer"
          >
            About
          </Link>
          <Link
            to="contactUs"
            className="hover: hover:border-magnolia border-eerie  cursor-pointer"
          >
            Contact us
          </Link>{" "}
        </div>
      )}
    </div>
  );
};

export default Hamburger;
