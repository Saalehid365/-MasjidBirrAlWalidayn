import React from "react";
import bank from "./bank.jpeg";

const Bankdetails = () => {
  return (
    <div className="bg-eerie pt-24 flex justify-evenly items-center pb-24">
      <div className="text-magnolia flex flex-col items-start h-72 justify-evenly md:items-center md:px-1">
        <h3 className="text-4xl font-bold md:text-4xl md:pb-6">
          Transfer to our Bank
        </h3>
        <h4 className="text-2xl">Bank Account Name: Almusa3ada</h4>
        <h4 className="text-2xl">Bank Account Number: 1100000047181</h4>
        <h4 className="text-2xl">Swift Code: RBTTTTPX</h4>
        <h4 className="text-2xl">IBAN: GB29 2929 2929 2929</h4>
      </div>
      <div className="md:hidden">
        <img src={bank} alt="bank" className="rounded-xl"></img>
      </div>
    </div>
  );
};

export default Bankdetails;
