import React from "react";
import bank from "./bank.jpeg";

const Bankdetails = () => {
  return (
    <div className="bg-eerie pt-24 flex justify-evenly items-center pb-24">
      <div className="text-magnolia flex flex-col items-start h-72 justify-evenly">
        <h3 className="text-4xl font-bold">Transfer to our Bank</h3>
        <h4 className="text-2xl">Account: Masjid Birr al-Walidayn</h4>
        <h4 className="text-2xl">Sort Code: 20-20-20</h4>
        <h4 className="text-2xl"> Account Number: 20202020</h4>
        <h4 className="text-2xl">IBAN: GB29 2929 2929 2929</h4>
      </div>
      <div>
        <img src={bank} alt="bank" className="rounded-xl"></img>
      </div>
    </div>
  );
};

export default Bankdetails;
