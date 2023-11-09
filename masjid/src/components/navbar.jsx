import React, { useContext, useState } from "react";
import { FaAlignJustify, FaArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";

import PopOutMenu from "./popOutMenu";
import { CartContext } from "../context/shopContext";

const Navbar = () => {
  const [test, setTest] = useState(false);
  const { isOpen, onClose, onOpen } = useContext(CartContext);
  const handleNav = () => {
    onOpen();
  };

  return (
    <div className="flex justify-between h-20 bg-blue-300 items-center fixed w-full top-0 sm:w-screen sm:h-14">
      <div className="">
        <h2 className="pl-4 text-white text-2xl font-bold sm:text-xl">
          Al-Musa3ada
        </h2>
      </div>
      <div className="sm:flex h-full items-center hidden">
        <Link className="bg-red-600 h-full flex items-center w-16 justify-center text-white text-sm">
          Donate
        </Link>
        <div
          className="bg-vergi h-full w-12 sm:flex justify-center items-center hidden"
          onClick={handleNav}
        >
          <FaAlignJustify className="text-2xl text-white" />
        </div>
      </div>
      <div className="flex md:flex md:text-xl md:pr-4 w-1/3 justify-between pr-12 text-white font-bold sm:hidden">
        <Link>
          <div className="flex items-center  ">
            <p className="mr-2">Home</p>
          </div>
        </Link>
        <Link>
          <div className="flex   items-center">
            <p className="mr-2">Projects</p>
          </div>
        </Link>
        <Link>
          <div className="flex   items-center">
            <p className="mr-2">Lessons</p>
          </div>
        </Link>
        <Link>
          <div className="flex   items-center">
            <p className="mr-2">About</p>
          </div>
        </Link>
        <Link>
          <div className="flex   items-center">
            <p className="mr-2">Contact</p>
          </div>
        </Link>
      </div>
      <PopOutMenu />
    </div>
  );
};

export default Navbar;
