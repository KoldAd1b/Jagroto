import React from "react";

const TeamCard = ({ img, name }) => {
  return (
    <div className="p-10  ">
      <div className=" rounded-lg shadow-2xl md:flex">
        <img
          src={img}
          alt={"Team Member"}
          className=" rounded-t-lg md:rounded-l-lg md:rounded-t-none h-[300px]"
        />
      </div>
    </div>
  );
};

export default TeamCard;
