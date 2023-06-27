import React from "react";
import inside from "../homeCom/inside.JPG";
import { motion } from "framer-motion";

const Build = () => {
  return (
    <div className="bg-eerie flex h-screen">
      <div className="flex justify-center items-center w-full md:hidden">
        <img
          src={inside}
          alt="insideMasjid"
          className="h-2/3 w-4/5 rounded-lg"
        ></img>
      </div>
      <div className="text-magnolia flex flex-col items-center justify-evenly w-2/3 pr-12 md:pr-0 md:w-full">
        <motion.h2
          className="text-7xl font-bold md:text-5xl md:px-4"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        >
          Building a beautiful place of worship
        </motion.h2>
        <div className="flex flex-col md:px-4">
          <motion.h3
            className="text-2xl md:text-2xl "
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8 }}
          >
            Uthman ibn Affan رَضِيَ الله عَنْهُ : reported: The Messenger of
            Allah, صلى الله عليه وسلم , said, “Whoever builds a mosque for
            Allah, Allah will build for him a house like it in Paradise.”
          </motion.h3>
          <motion.h4
            className="md:pt-4 md:font-bold"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.2 }}
          >
            Sāhīh al-Bukhārī, Sāhīh Muslim
          </motion.h4>
        </div>
        <motion.button
          className="bg-maya text-eerie rounded-md w-60 h-12 font-semibold"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        >
          Ways to donate
        </motion.button>
      </div>
    </div>
  );
};

export default Build;
