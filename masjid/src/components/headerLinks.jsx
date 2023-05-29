import React from "react";
import { Link } from "react-router-dom";

const HeaderLinks = () => {
  return (
    <div
      className="flex justify-evenly w-3/5 font-serif md:hidden
    "
    >
      <Link
        to="/"
        className=" cursor-pointer hover:border-b-2 hover:border-magnolia border-eerie border-b-2 "
      >
        Home
      </Link>
      <Link
        to="appeal"
        className="hover:border-b-2 hover:border-magnolia border-eerie border-b-2 cursor-pointer"
      >
        Appeal
      </Link>
      <Link
        to="waysToDonate"
        className="hover:border-b-2 hover:border-magnolia border-eerie border-b-2 cursor-pointer"
      >
        Ways to Donate
      </Link>
      <Link
        to="about"
        className="hover:border-b-2 hover:border-magnolia border-eerie border-b-2 cursor-pointer"
      >
        About
      </Link>
      <Link
        to="contactUs"
        className="hover:border-b-2 hover:border-magnolia border-eerie border-b-2 cursor-pointer"
      >
        Contact us
      </Link>
    </div>
  );
};

export default HeaderLinks;
