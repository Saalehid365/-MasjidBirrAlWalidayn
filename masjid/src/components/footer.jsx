import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col items-start pl-4 pt-12">
        <h2 className="text-3xl text-teal-800">Al-Musa3ada</h2>
        <div className="flex pt-4 w-40 justify-between text-xl">
          <a href="/" className="text-blue-300">
            <FaTwitter />
          </a>
          <a href="/" className="text-blue-300">
            <FaInstagram />
          </a>
          <a href="/" className="text-blue-500">
            <FaFacebook />
          </a>
          <a href="/" className="text-red-500">
            <FaYoutube />
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2 justify-items-start pl-4 mt-8 text-teal-800 h-32 text-lg">
        <Link>Our Story</Link>
        <Link>Projects</Link>
        <Link>Ways to donate</Link>
        <Link>Our Story</Link>
        <Link>Our Story</Link>
      </div>
      <div className="mb-4">Copyright 2023 | Al-Musa3ada</div>
      <div className="bg-gray-700 h-10 flex items-center justify-center text-sm">
        <h3 className="pl-2 text-gray-400 ">
          Designed and Developed by{" "}
          <Link className="underline underline-offset-4 text-red-500 tracking-wider	">
            IDesign365
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Footer;
