import React from "react";
import appeal from "../appealCom/appeal.JPG";
import image1 from "../appealCom/image1.jpg";
import image2 from "../appealCom/image2.jpg";
import image3 from "../appealCom/image3.jpg";
import image4 from "../appealCom/image4.jpg";
import { FaAngleDown } from "react-icons/fa";

const Main = () => {
  return (
    <div className="bg-eerie pt-24 pb-40 md:pb-12">
      <h3 className="text-5xl pb-40 text-magnolia font-bold underline md:pb-24">
        Masjid Birr al-Walidayn Appeal
      </h3>
      <div className="flex justify-evenly  md:flex-col">
        <div className="flex justify-center">
          <img
            src={appeal}
            alt="masjidappeal"
            className="w-2/3 rounded-2xl md:w-full md:rounded-none"
          ></img>
        </div>
        <div className="text-magnolia w-2/3 md:w-full md:pt-12">
          <h3 className="text-start text-2xl md:text-center">
            The Prophet ﷺ said,{" "}
            <span className="text-maya text-3xl">
              "Set up a barrier between yourself and the Hellfire, even with
              half a date in charity"
            </span>{" "}
          </h3>
          <h3 className="mt-6 font-bold ">
            al-Mu'jam al-Kabīr lil-Tabarānī 18/303
          </h3>
          <h2 className="mt-24 text-3xl font-bold text-start md:text-center">
            Current Stage
          </h2>
          <h3 className="pr-12 text-start text-2xl mt-12 md:pr-0 md:text-center md:px-4">
            In the cuurent stage we need 175,000 pounds for mens and womens
            bathrooms, Ablution areas, electrical work, plumbing, ceramic
            floors, and paint for the walls
          </h3>
          <div className="mt-12">
            <button className="w-40 bg-maya text-eerie h-10 rounded-lg">
              Donate Now
            </button>
          </div>
          <div className=" h-4 text-center w-full md:flex md:justify-center md:pt-6">
            <FaAngleDown className="text-5xl font-thin animate-bounce text-vergi" />
            <FaAngleDown className="text-5xl font-thin animate-bounce text-vergi" />
            <FaAngleDown className="text-5xl font-thin animate-bounce text-vergi" />
          </div>
        </div>
      </div>
      <div className="h-screen pt-60 flex justify-evenly md:pt-24 md:grid md:grid-cols-1 md:grid-rows-1 md:h-full">
        <div className="w-60 h-96 md:flex md:justify-center md:w-full md:p-2">
          <img
            src={image1}
            alt="image1"
            className="rounded-t-full rounded-b-full md:rounded-none md:h-full md:w-full"
          ></img>
        </div>
        <div className="w-60 h-96 md:flex md:justify-center md:w-full md:p-2">
          <img
            src={image2}
            alt="image1"
            className="rounded-t-full rounded-b-full md:rounded-none md:h-full md:w-full"
          ></img>
        </div>
        <div className="w-60 h-96 md:flex md:justify-center md:w-full md:p-2">
          <img
            src={image3}
            alt="image1"
            className="rounded-t-full rounded-b-full md:rounded-none md:h-full md:w-full"
          ></img>
        </div>
        <div className="w-60 h-96 md:flex md:justify-center md:w-full md:p-2">
          <img
            src={image4}
            alt="image1"
            className="rounded-t-full rounded-b-full md:rounded-none md:h-full md:w-full"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Main;
