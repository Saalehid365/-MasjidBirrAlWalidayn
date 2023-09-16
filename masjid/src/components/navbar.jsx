import React, { useContext, useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
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
    <div className="flex justify-between h-16 bg-blue-500 items-center fixed w-full top-0 ">
      <div className="">
        <h2 className="pl-4 text-white">Al-Musa3ada</h2>
      </div>
      <div className="flex h-full items-center">
        <Link className="bg-red-600 h-full flex items-center w-16 justify-center text-white text-sm">
          Donate
        </Link>
        <div
          className="bg-vergi h-full w-12 flex justify-center items-center"
          onClick={handleNav}
        >
          <FaAlignJustify className="text-2xl" />
        </div>
      </div>
      <PopOutMenu />
    </div>
  );
};

export default Navbar;
