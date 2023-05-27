import React from "react";
import inside from "../homeCom/inside.JPG";

const Build = () => {
  return (
    <div className="bg-eerie flex h-screen">
      <div className="flex justify-center items-center w-full">
        <img
          src={inside}
          alt="insideMasjid"
          className="h-2/3 w-4/5 rounded-lg"
        ></img>
      </div>
      <div className="text-magnolia flex flex-col items-center justify-evenly w-2/3 pr-12">
        <h2 className="text-7xl font-bold ">
          Building a beautiful place of worship
        </h2>
        <div className="flex flex-col">
          <h3 className="text-3xl ">
            Uthman ibn Affan رَضِيَ الله عَنْهُ : reported: The Messenger of
            Allah, صلى الله عليه وسلم , said, “Whoever builds a mosque for
            Allah, Allah will build for him a house like it in Paradise.”
          </h3>
          <h4>Sāhīh al-Bukhārī, Sāhīh Muslim</h4>
        </div>
        <button className="bg-maya text-eerie rounded-md w-60 h-12 font-semibold">
          Ways to donate
        </button>
      </div>
    </div>
  );
};

export default Build;