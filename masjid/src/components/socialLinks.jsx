import React from "react";
import { FaEnvelope, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex w-96 justify-evenly text-xl">
      <FaTwitter className="hover:text-white hover:cursor-pointer hover:scale-125" />
      <FaInstagram className="hover:text-white hover:cursor-pointer hover:scale-125" />
      <FaYoutube className="hover:text-white hover:cursor-pointer hover:scale-125" />
      <FaEnvelope className="hover:text-white hover:cursor-pointer hover:scale-125" />
    </div>
  );
};

export default SocialLinks;
