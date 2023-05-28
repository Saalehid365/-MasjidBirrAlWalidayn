import React from "react";

const Forms = () => {
  return (
    <form className="w-4/12 text-eerie h-full">
      <div className="flex flex-col items-start">
        <label className="text-magnolia">
          Name <span className="text-gray-600"> &#40;required &#41;</span>
        </label>
        <input type="text" className="w-full h-10 rounded-lg mt-2 pl-2"></input>
      </div>
      <div className="flex flex-col items-start mt-2">
        <label className="text-magnolia">
          Subject <span className="text-gray-600"> &#40;required &#41;</span>
        </label>
        <input className="w-full h-10 rounded-lg mt-2 pl-2"></input>
      </div>
      <div className="flex flex-col items-start mt-2">
        <label for="form" className="text-magnolia">
          Message <span className="text-gray-600"> &#40;required &#41;</span>
        </label>
        <textarea
          id="form"
          name="message"
          rows="8"
          cols="50"
          type="message"
          className="w-full text-eerie rounded-lg mt-2 pl-2"
        ></textarea>
      </div>
      <div className="pt-12">
        <button className="bg-maya w-40 rounded-md h-10 font-bold cursor-pointer">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Forms;
