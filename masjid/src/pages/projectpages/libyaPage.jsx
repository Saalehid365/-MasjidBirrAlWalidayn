import React from "react";

const LibyaPage = () => {
  return (
    <div className="pt-2">
      <img
        src="https://s.abcnews.com/images/International/flood-damage-derna-libya-gty-230_hpMain_20230915-063733.jpg"
        alt="congoImg"
        className="h-60c w-full"
      ></img>
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
          <button className="bg-red-600 w-32">Donate now</button>
        </div>
      </div>
      <div className="text-start text-xl pt-6 px-6 font-light ">
        <h3 className="line-clamp-2 text-xl">Congo Africa </h3>

        <h2 className="font-bold font-mono pt-2 uppercase text-3xl">
          aid the recovery of Libya
        </h2>
      </div>
      <div className="text-start px-6 pt-6 text-lg ">
        <p className="pt-4 text-base">
          During this testing time for our Muslim brothers and sisters in Libya
          we come together to extend our hearts and hands to those in need.
          Libya is currently grappling with a devastating flood crisis,
          affecting countless lives and communities. Our charity has launched
          the Libya Flood Appeal to provide immediate relief and assistance to
          those affected by this disaster.
        </p>
        <img
          src="https://i.abcnewsfe.com/a/e0ebce9e-8b6f-4ee6-b211-66f5cb31f7e1/libya-floods-weather-ap-moe-002-230913_1694607623121_hpMain_16x9.jpg?w=992"
          alt="congoimgae"
          className="mt-4 "
        />

        <p className="pt-4 text-base">
          These catastrophic floods have left Libya in devastation with
          thousands of confirmed deaths and tens of thousands missing or
          displaced. Please donate what you are able.
        </p>
        <p className="pt-4 text-base">
          The Mayor of flood-affected city in Derna, Libya says death toll could
          reach as high as 20,000. May Allah allow us to be aid to our brothers
          and sisters even if its from a small donation. May Allah grant us
          sincerity and baraka in our wealth to aid those in need.
        </p>
      </div>
      <div className="bg-gray-200 px-6 text-start py-4 mt-10 ">
        <div className="pt-4 flex justify-center items-center flex-col">
          <button className="bg-red-500 px-4 py-1 text-white">
            Donate now
          </button>
          <p className="mt-4">
            Refernce Flood:{" "}
            <span className="text-red-500 font-bold">Relief</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LibyaPage;
