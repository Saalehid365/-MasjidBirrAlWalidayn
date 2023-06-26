import React from "react";
import masjid from "../homeCom/masjid.JPG";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div>
      <div className="flex text-magnolia bg-eerie h-screen w-screen justify-between md:flex-col md:h-full">
        <div className="flex flex-col justify-center h-2/3 items-star pl-12 md:pt-16 md:pb-12 md:pl-4">
          <motion.h2
            className="text-7xl font-bold text-start md:text-4xl"
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Masjid
          </motion.h2>
          <motion.h2
            className="text-7xl font-bold text-start md:text-5xl"
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Birr al-Walidayn
          </motion.h2>
          <motion.p
            className="w-2/3 text-start pt-6 text-3xl font-serif md:w-full md:pr-6 md:text-xl"
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            We cant wait to complete the masjid which will allow you to sit and
            benefit in one of the house's of Allaah
          </motion.p>
          <motion.a
            href="https://paypal.me/almusa3ada"
            target="_blank"
            rel="noreferrer"
            className="text-center bg-maya w-24 text-eerie rounded-lg mt-6 p-2 font-bold "
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Donate
          </motion.a>
        </div>
        <div className="flex items-center justify-center pr-12 md:pr-0">
          <motion.img
            src={masjid}
            alt="masjid"
            className="w-full h-3/5 bg rounded-3xl shadow-white shadow-inner md:w-full md:h-96 md:rounded-none"
            initial={{ y: 1000, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1 }}
          ></motion.img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
