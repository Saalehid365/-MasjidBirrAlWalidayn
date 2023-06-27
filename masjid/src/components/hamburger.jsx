import React, { useState } from "react";
import { FaListAlt, IconName } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hamburger = () => {
  const [active, setActive] = useState(false);

  const toggleNav = () => {
    setActive(!active);
  };

  return (
    <div className=" hidden md:flex md:items-start md:w-full   md:flex-col">
      <button onClick={toggleNav}>
        <FaListAlt className="text-4xl ml-4 mb-2" />
      </button>
      {active && (
        <motion.div
          className="h-screen flex flex-col items-start text-4xl bg-gray-700 w-full pl-4 static"
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/"
            className=" cursor-pointer hover:border-b-2 hover:border-magnolia border-eerie h-20 flex items-center underline underline-offset-8"
            onClick={toggleNav}
          >
            Home
          </Link>
          <Link
            to="appeal"
            className="hover: hover:border-magnolia border-eerie  cursor-pointer h-20 flex items-center underline underline-offset-8"
            onClick={toggleNav}
          >
            Appeal
          </Link>
          <Link
            to="waysToDonate"
            className="hover: hover:border-magnolia border-eerie  cursor-pointer h-20 flex items-center underline underline-offset-8"
            onClick={toggleNav}
          >
            Ways to Donate
          </Link>
          <Link
            to="about"
            className="hover: hover:border-magnolia border-eerie  cursor-pointer h-20 flex items-center underline underline-offset-8"
            onClick={toggleNav}
          >
            About
          </Link>
          <Link
            to="contactUs"
            className="hover: hover:border-magnolia border-eerie  cursor-pointer h-20 flex items-center underline underline-offset-8"
            onClick={toggleNav}
          >
            Contact us
          </Link>{" "}
        </motion.div>
      )}
    </div>
  );
};

export default Hamburger;
