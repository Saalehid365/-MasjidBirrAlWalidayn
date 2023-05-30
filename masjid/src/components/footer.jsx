import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="border-t-2 ">
      <div className="flex h-72 justify-evenly items-start pt-6 md:flex-col md:items-center md:pb-6 md:h-full">
        <div className="flex flex-col justify-evenly h-60 md:hidden">
          <h3 className="font-bold text-2xl">Support</h3>
          <Link>About</Link>
          <Link>Contact</Link>
          <Link>Ways to donate</Link>
          <Link>Lessons</Link>
        </div>
        <div className="h-60 flex flex-col pt-4 md:justify-center">
          <h3 className="font-bold text-2xl md:text-4xl">Stay up to date</h3>
          <div className="flex pt-20">
            <input
              placeholder="Email Address"
              className="border border-eerie h-16 w-72 rounded-l-lg pl-4"
            ></input>
            <button className="h-16 bg-eerie text-magnolia w-24 rounded-r-lg font-bold">
              Subscribe
            </button>
          </div>
        </div>
        <div className="md:pt-6">
          <h3 className="font-bold text-2xl md:pb-4">Follow us</h3>
          <div className="flex pt-20 w-60 justify-evenly md:pt-0">
            <FaTwitter className="text-2xl hover:scale-125 cursor-pointer" />
            <FaInstagram className="text-2xl hover:scale-125 cursor-pointer" />
            <FaFacebook className="text-2xl hover:scale-125 cursor-pointer" />
            <FaEnvelope className="text-2xl hover:scale-125 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
