import React from "react";
import Logo from "./logo";
import HeaderLinks from "./headerLinks";
import SocialLinks from "./socialLinks";

const Navbar = () => {
  return (
    <div className=" h-32 bg-eerie text-1xl flex justify-between items-center text-magnolia border-b-2 border-magnolia">
      <Logo />
      <HeaderLinks />
      <SocialLinks />
    </div>
  );
};

export default Navbar;
