import React from "react";
import { FaCreditCard, FaPaypal } from "react-icons/fa";

const Regular = () => {
  return (
    <div className="h-96 flex flex-col justify-center items-center md:px-6">
      <h3 className="text-4xl mb-4">
        Set up a standing order of jus £10 a month
      </h3>
      <h4 className="mb-12 md:text-2xl">
        The money will help to complete and maintain the masjid.
      </h4>
      <div className="flex justify-between text-magnolia w-3/5 md:flex-col md:h-28">
        <button className="w-96 h-12 rounded-sm bg-eerie flex items-center justify-center md:w-60">
          <FaPaypal className="text-3xl mr-2" />
          Paypal Subscribe
        </button>
        <button className="w-96 h-12 rounded-sm bg-eerie flex items-center justify-center md:w-60">
          <FaCreditCard className="text-3xl mr-2" />
          Paypal Subscribe
        </button>
      </div>
    </div>
  );
};

export default Regular;
