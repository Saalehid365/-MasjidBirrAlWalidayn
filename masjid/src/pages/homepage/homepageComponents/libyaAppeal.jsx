import React from "react";
import { Link } from "react-router-dom";

const LibyaAppeal = () => {
  return (
    <div className="mt-20 mb-4">
      <div className="font-serif">
        <h2 className="text-4xl uppercase">Libya Appeal</h2>
        <h3 className="text-2xl pt-4">Aid the people of libya</h3>
        <div className="px-4 pt-6 ">
          <Link to="libyaProject">
            <img
              src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/ZYGBXED5O5LUFIQ3P7JFHOFYZI.jpg"
              alt="morroccoAid"
            />
          </Link>
          <div className="bg-gray-100 py-10 ">
            <h2 className="font-semibold text-xl uppercase ">
              Assist in the recovery
            </h2>
            <h3 className="pt-2 text-lg text-center px-6">
              Lets help the people from Libya rebuild what they have lost
            </h3>
            <div className="h-10 mt-4">
              <Link className="bg-blue-500 px-8 rounded-md py-2 text-white">
                Donate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibyaAppeal;
