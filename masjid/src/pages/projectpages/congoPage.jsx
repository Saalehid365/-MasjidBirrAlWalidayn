import React from "react";

const CongoPage = () => {
  return (
    <div>
      <img
        src="https://i.guim.co.uk/img/media/40ba30880ddd3ed87a1e12c062b478e95e729b05/0_351_5952_3571/master/5952.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=42298abd1b963b5f6b770750b51ea046"
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
        <h3 className="line-clamp-2 text-xl">Congo Africa </h3>

        <h2 className="font-bold font-mono pt-2 uppercase text-3xl">
          aid the families in Congo
        </h2>
      </div>
      <div className="text-start px-6 pt-6 text-lg ">
        <p className="font-bold ">
          MAJOR ANNOUNCEMENT FOR THE DA’WAH IN
          <span className="text-blue-500"> CAIRO</span>
        </p>
        <p className="pt-4 text-base">
          MARKAZ IMĀM AL-BUKHĀRĪ It is with great happiness & joy that we
          announce our intention to build a building and outright own it to
          further the Da’wah in Cairo.
        </p>
        <img
          src="https://i.pinimg.com/originals/8c/bb/02/8cbb0279506e2e142c0d16f5fa2f4a61.jpg"
          alt="congoimgae"
          className="mt-4 "
        />
        <p className="font-bold pt-6 uppercase">
          Background to the{" "}
          <span className="text-green-500 font-extrabold">Congo project</span>
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
        <h2 className="text-4xl font-bold">
          History of <span className="text-green-600">Congo</span>
        </h2>
        <div className="pt-4 ">
          <p className="text-base pt-4">
            Muslims came to this vast country which is located in the
            hard-to-reach central part of Africa for the first time in the{" "}
            <span className="text-green-600 font-extrabold">18th century.</span>{" "}
            Most of the Muslim population is concentrated in the east of the
            country, making up about 10-15% of the country’s population. The
            majority of the rest of the population consists of evangelized
            indigenous people, and 10% who follow indigenous religions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CongoPage;
