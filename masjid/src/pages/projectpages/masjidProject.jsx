import React from "react";
import masjidSide from "./masjidSide.jpg";
import masjidleft from "./masjidleft.jpg";

const MasjidProject = () => {
  return (
    <div>
      <img src={masjidSide} alt={masjidSide}></img>
      <div className="bg-blue-500 text-white font-sans font-bold pt-4">
        <h2 className="text-3xl">Give whatever you can</h2>
        <div className="flex justify-evenly pt-4 ">
          <h2>Sinlge</h2>
          <h2>Weekly</h2>
          <h2>Monthly</h2>
        </div>
        <div className="flex justify-evenly pt-2">
          <h2 className="border h-12 w-20 flex items-center justify-center font-serif">
            £5
          </h2>
          <h2 className="border h-12 w-20 flex items-center justify-center font-serif">
            £10
          </h2>
          <h2 className="border h-12 w-20 flex items-center justify-center font-serif">
            £25
          </h2>
        </div>
        <div className="pt-4 pb-4 flex justify-evenly">
          <input
            type="text"
            placeholder="£"
            className="h-10 w-40 text-lg text-gray-700 pl-2"
          ></input>
          <button className="bg-green-600 w-32">Donate now</button>
        </div>
      </div>
      <div className="text-start text-xl pt-6 px-6 font-light ">
        <h3 className="line-clamp-2 text-xl">A Beacon of Sunnah in </h3>
        <h2 className="text-xl">Cairo</h2>

        <h2 className="font-bold font-mono pt-2 uppercase text-3xl">
          Help build a masjid
        </h2>
      </div>
      <div className="text-start px-6 pt-6 text-lg ">
        <p className="font-bold ">
          MAJOR ANNOUNCEMENT FOR THE DA’WAH IN
          <span className="text-green-500 font-extrabold"> CAIRO</span>
        </p>
        <p className="pt-4 text-base">
          MARKAZ IMĀM AL-BUKHĀRĪ It is with great happiness & joy that we
          announce our intention to build a building and outright own it to
          further the Da’wah in Cairo.
        </p>
        <img src={masjidleft} alt={masjidleft} className="mt-4 " />
        <p className="font-bold pt-6 uppercase">
          Background to{" "}
          <span className="text-green-500">Masjid Bir Al-Walidayn: </span>
        </p>
        <p className="pt-4 text-base">
          The Da’wah began in 2011 when we first set up & established a regular
          fortnightly lesson – “The 3 Fundamental Principles”. In the early
          years we moved from location to location, hiring halls wherever they
          were available to keep the Da’wah going. As upon the advice of the
          Scholars, we began studying books one after the other and very quickly
          our lessons became weekly, and for some time now we have increased to
          2 classes a week, such was the enthusiasm…
        </p>
      </div>
      <div className="bg-gray-200 px-6 text-start py-4 mt-10 ">
        <h2 className="text-4xl font-bold">History of Cairo</h2>
        <div className="pt-4 text-lg">
          <p className="">
            Cairo has been called a City of a{" "}
            <span className="text-2xl text-green-500 font-extrabold">
              Thousand Minarets.
            </span>
          </p>
          <p className="text-base pt-4">
            There are approximately{" "}
            <span className="text-green-500 font-extrabold">130,000 </span>
            mosques in Egypt, most of the oldest are in Cairo. Each house of
            worship has a story behind its construction, a philosophy of
            construction and its own special internal and external design
          </p>
        </div>
      </div>
    </div>
  );
};

export default MasjidProject;
