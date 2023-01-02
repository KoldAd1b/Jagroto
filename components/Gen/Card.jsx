import React from "react";
/* eslint-disable @next/next/no-img-element */

const Card = ({ url, info, title, leading, key, index }) => {
  return (
    <div
      key={key}
      className={`flex flex-col justify-between w-80 sm:w-96 h-80  bg-center text-gray-800 shadow-lg overflow-hidden  cursor-pointer relative  `}
    >
      <img
        src={url}
        alt=""
        className="absolute w-full h-full object-cover z-0"
      />
      <div className="flex justify-between items-center ml-4 pr-8">
        <div
          className={`bg-[#72e0ce] w-10 h-12 shadow flex flex-col-reverse p-2 text-center font-bold text-white rounded-b-full relative z-10`}
        >
          {index + 1}
        </div>
      </div>
      <div
        className={` bg-white opacity-95 shadow-md p-4 flex flex-col mr-4 mb-8 shadow-gray-400  `}
      >
        <h3 className="text-xl font-bold  pb-1">{title}</h3>
        <p className="truncate text-gray-400 font-sans text-base">{info}</p>
        <div className="flex justify-between items-center font-light truncate">
          <span className="text-gray-600 text-xs mt-1 opacity-75">
            {leading}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
