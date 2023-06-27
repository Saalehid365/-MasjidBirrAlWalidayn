import React from "react";
import { FaCreditCard, FaPaypal } from "react-icons/fa";
import { motion } from "framer-motion";

const Regular = () => {
  return (
    <motion.div className="h-96 flex flex-col justify-center items-center md:px-6">
      <motion.h3
        className="text-4xl mb-4"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        Set up a standing order of jus £10 a month
      </motion.h3>
      <motion.h4
        className="mb-12 md:text-2xl"
        initial={{ opacity: 0.5, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4 }}
      >
        The money will help to complete and maintain the masjid.
      </motion.h4>
      <div className="flex justify-between text-magnolia w-3/5 md:flex-col md:h-28">
        <motion.a
          href="https://paypal.me/almusa3ada"
          target="_blank"
          rel="noreferrer"
          className="w-96 h-12 rounded-md bg-eerie flex items-center justify-center md:w-60"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <FaPaypal className="text-3xl mr-2" />
          Paypal Subscribe
        </motion.a>
        <motion.a
          href="https://paypal.me/almusa3ada"
          target="_blank"
          rel="noreferrer"
          className="w-96 h-12 rounded-md bg-eerie flex items-center justify-center md:w-60 "
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4 }}
        >
          <FaCreditCard className="text-3xl mr-2" />
          Paypal Subscribe
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Regular;
