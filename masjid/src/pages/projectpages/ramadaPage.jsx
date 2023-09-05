import React from "react";

const RamadaPage = () => {
  return (
    <div>
      <img
        src="https://www.xinhuanet.com/english/africa/2020-05/19/139069899_15898887157291n.jpg"
        alt="congoImg"
        className=""
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
        <h3 className="line-clamp-2 text-xl">Ramadhaan </h3>

        <h2 className="font-bold font-mono pt-2 uppercase text-3xl">
          Feeding the Fasting Person
        </h2>
      </div>
      <div className="text-start px-6 pt-6 text-lg ">
        <p className="font-bold ">
          What is
          <span className="text-blue-500"> Ramadhaan</span>
        </p>
        <p className="pt-4 text-base">
          Fasting (Siyām in Arabic) is the fourth pillar of Islam and Allah
          obligated fasting on this Ummah just as he obligated it on the
          previous nations. He (the Most High) stated:
        </p>
        <p className="pt-4 font-extrabold">
          يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا
          كُتِبَ عَلَى الَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ{" "}
        </p>
        <p className="pt-4">
          “O you who believe, observing the fast is prescribed for you as it was
          prescribed for those before you, that you may become pious.”[2]
        </p>
        <img
          src="https://static.wixstatic.com/media/a3fe7a_718d5b8cac4e460fa5b36e6b51eb2cb5~mv2.jpg/v1/fill/w_640,h_416,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a3fe7a_718d5b8cac4e460fa5b36e6b51eb2cb5~mv2.jpg"
          alt="congoimgae"
          className="mt-4 "
        />
        <p className="font-bold pt-6 uppercase">
          Our aim in the
          <span className="text-green-500 font-extrabold">
            {" "}
            Ramadhaan Appeal
          </span>
        </p>
        <p className="pt-4 text-base">
          We aim to distribute 100 packs everyday for Suhoor and Iftaar for the
          poor family in the blessed month of Ramadhaan
        </p>
      </div>
      <div className="bg-gray-200 px-6 text-start py-4 mt-10 ">
        <h2 className="text-4xl font-bold">
          Benefits of{" "}
          <span className="text-green-600">Feeding a fasting person</span>
        </h2>
        <div className="pt-4 ">
          <p className="text-base pt-4">
            It was narrated from Zaid bin Khalid Al-Juhani that the Messenger of
            Allah (ﷺ) said:
          </p>
          <p className="text-base pt-4 font-bold">
            “Whoever gives food for a fasting person to break his fast, he will
            have a reward like theirs, without that detracting from their reward
            in the slightest.”
          </p>
          <p className="pt-4 text-sm"> Sunan Ibn Majah 1746</p>
        </div>
      </div>
    </div>
  );
};

export default RamadaPage;
