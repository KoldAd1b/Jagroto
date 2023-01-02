import React from "react";
/* eslint-disable @next/next/no-img-element */

const CarouselCard = ({ index, src, title, description, location }) => {
  return (
    <div className="shadow-lg  flex flex-wrap w-full lg:w-4/5 mx-auto">
      <div className="bg-cover bg-bottom border w-full md:w-1/3  md:h-auto relative">
        <div className="absolute text-xl">
          <i className="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
        </div>
        <img
          src={src}
          alt=""
          className="w-full h-full object-cover  rounded-tr-lg rounded-tl-lg"
        />
      </div>

      <div className="bg-white w-full md:w-2/3">
        <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative shadow-lg rounded-md">
          <div className="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
            <div className="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
              <h3 className="font-semibold tracking-wide text-xl">{title}</h3>
              <p className="mb-0 mt-3 text-gray-600 text-sm italic">
                {location}
              </p>
              <hr className="w-1/4 md:ml-0 mt-4  border lg:hidden" />
            </div>

            <div className="w-full lg:w-3/5 lg:px-3  ">
              <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm  font-light opacity-80 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
