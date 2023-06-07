import React from "react";
import { FaCreditCard, FaPaypal } from "react-icons/fa";

const RegularLink = () => {
  return (
    <div className="bg-eerie text-magnolia pl-24 pt-12 md:pl-0">
      <div className="">
        <h2 className="text-5xl font-bold w-2/4 text-start md:w-full md:text-center md:text-4xl md:px-4">
          Set-up a Direct Debit or a Monthly PayPal Subscription
        </h2>
        <p className="pt-12 text-start text-2xl underline md:text-center">
          Donate monthly
        </p>
        <div className="flex flex-col justify-evenly items-center w-1/3 h-96 md:w-full md:px-6">
          <h3 className="text-5xl font-bold">£5 or £10</h3>
          <h3>Per Month</h3>
          <a
            href="https://paypal.me/almusa3ada"
            target="_blank"
            rel="noreferrer"
            className="flex bg-blue-400 w-full h-10 items-center justify-center rounded-md"
          >
            <FaPaypal />
            Subscribe
          </a>
          <button className="flex bg-gray-700 w-full h-10 items-center justify-center rounded-md">
            <FaCreditCard />
            Debit or Credit Card
          </button>
          <button className="bg-magnolia h-12 w-60 text-eerie rounded-md">
            Set-up direct debit
          </button>
          <div className="flex items-center">
            <FaPaypal className="text-3xl mr-4" />
            <h2 className="text-3xl md:text-2xl">almusa3ada@gmail.com</h2>
          </div>
        </div>
        <div className=" flex justify-center md:"></div>
      </div>
    </div>
  );
};

export default RegularLink;
