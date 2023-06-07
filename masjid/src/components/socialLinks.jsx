import React from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex w-96 justify-evenly text-xl md:hidden">
      <a href="https://twitter.com/almusa3ada" target="_blank" rel="noreferrer">
        <FaTwitter className="hover:text-white hover:cursor-pointer hover:scale-125" />
      </a>
      <a
        href="https://www.instagram.com/almusa3ada/?hl=en-gb"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram className="hover:text-white hover:cursor-pointer hover:scale-125" />
      </a>
      <a
        href="https://m.facebook.com/people/Al-Musaada/100081314228196/"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebook className="hover:text-white hover:cursor-pointer hover:scale-125" />
      </a>
      <button onClick={() => (window.location = "mailto:yourmail@domain.com")}>
        <FaEnvelope className="hover:text-white hover:cursor-pointer hover:scale-125" />
      </button>
    </div>
  );
};

export default SocialLinks;
