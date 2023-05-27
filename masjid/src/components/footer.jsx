import React from "react";
import { FaEnvelope, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import Id365 from "./id365";

const Footer = () => {
  return (
    <div>
      <div className="flex h-96 justify-evenly items-start pt-12">
        <div className="flex flex-col justify-evenly h-60">
          <h3 className="font-bold text-2xl">Support</h3>
          <Link>About</Link>
          <Link>Contact</Link>
          <Link>Ways to donate</Link>
          <Link>Lessons</Link>
        </div>
        <div className="h-60 flex flex-col pt-4 ">
          <h3 className="font-bold text-2xl">Stay up to date</h3>
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
        <div>
          <h3 className="font-bold text-2xl">Follow us</h3>
          <div className="flex pt-20 w-60 justify-evenly">
            <FaTwitter className="text-2xl hover:scale-125 cursor-pointer" />
            <FaInstagram className="text-2xl hover:scale-125 cursor-pointer" />
            <FaYoutube className="text-2xl hover:scale-125 cursor-pointer" />
            <FaEnvelope className="text-2xl hover:scale-125 cursor-pointer" />
          </div>
        </div>
      </div>
      <Id365 />
    </div>
  );
};

export default Footer;
