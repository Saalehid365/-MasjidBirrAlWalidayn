import React from "react";
import { Link } from "react-router-dom";

const HeaderLinks = () => {
  return (
    <div
      className="flex justify-evenly w-3/5 font-serif
    "
    >
      <Link
        to="/"
        className="hover:border-b-2 hover:border-magnolia border-eerie border-b-2"
      >
        Home
      </Link>
      <Link
        to="appeal"
        className="hover:border-b-2 hover:border-magnolia border-eerie border-b-2"
      >
        Appeal
      </Link>
      <Link
        to="waysToDonate"
        className="hover:border-b-2 hover:border-magnolia border-eerie border-b-2"
      >
        Ways to Donate
      </Link>
      <Link className="hover:border-b-2 hover:border-magnolia border-eerie border-b-2">
        About
      </Link>
      <Link
        to="contactUs"
        className="hover:border-b-2 hover:border-magnolia border-eerie border-b-2"
      >
        Contact us
      </Link>
      <Link className="hover:border-b-2 hover:border-magnolia border-eerie border-b-2">
        Lessons
      </Link>
    </div>
  );
};

export default HeaderLinks;
