import React from "react";
import { FaCreditCard, FaPaypal } from "react-icons/fa";

const RegularLink = () => {
  return (
    <div className="bg-eerie text-magnolia pl-24 pt-12">
      <div className="">
        <h2 className="text-5xl font-bold w-2/4 text-start">
          Set-up a Direct Debit or a Monthly PayPal Subscription
        </h2>
        <p className="pt-12 text-start text-2xl">Donate monthly</p>
        <div className="flex flex-col justify-evenly items-center w-1/3 h-96">
          <h3 className="text-6xl font-bold">£5 or £10</h3>
          <h3>Per Month</h3>
          <button className="flex bg-blue-400 w-full h-10 items-center justify-center rounded-md">
            <FaPaypal />
            Subscribe
          </button>
          <button className="flex bg-gray-700 w-full h-10 items-center justify-center rounded-md">
            <FaCreditCard />
            Debit or Credit Card
          </button>
          <button className="bg-magnolia h-12 w-60 text-eerie rounded-md">
            Set-up direct debit
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default RegularLink;
