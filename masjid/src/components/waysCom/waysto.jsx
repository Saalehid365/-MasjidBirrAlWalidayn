import React from "react";
import payments from "./payments.jpg";

const Waysto = () => {
  return (
    <div className="pt-24 bg-eerie">
      <h2 className="text-5xl font-bold text-magnolia underline">
        Ways to Donate
      </h2>
      <div className="px-12 flex justify-center py-12">
        <img src={payments} alt="payment" className="w-2/3"></img>
      </div>
      <div className="flex flex-col items-start justify-evenly text-magnolia pl-24 h-72 md:px-0 md:items-center">
        <h3 className="text-5xl font-bold md:text-4xl">Use our payment form</h3>
        <h4 className="text-3xl md:text-2xl">
          Pay using Apple Pay, Paypal or Card
        </h4>
        <button className="bg-maya text-eerie w-40 h-12 rounded-md">
          Donation Form
        </button>
      </div>
    </div>
  );
};

export default Waysto;
