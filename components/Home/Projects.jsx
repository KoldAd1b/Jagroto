import React, { useEffect, useState } from "react";
/* eslint-disable @next/next/no-img-element */
import { BsArrow90DegLeft, BsArrow90DegRight } from "react-icons/bs";
import CarouselCard from "../Gen/CarouselCard";

const projects = [
  {
    url: "https://www.travelandleisure.com/thmb/91pb8LbDAUwUN_11wATYjx5oF8Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1668530933925-a57e8424cda0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1668787854810-fc2e682f48b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1668776157628-e26cbeed6eb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60",
  },
  { url: "https://media.timeout.com/images/105562209/image.jpg" },
];

const Projects = () => {
  const [curr, setCurr] = useState(0);

  useEffect(() => {
    const lastIndex = projects.length - 1;

    if (curr < 0) {
      setCurr(lastIndex);
    }
    if (curr > lastIndex) {
      setCurr(0);
    }
  }, [curr]);

  return (
    <section className="h-screen sm:h-[80vh] md:h-[70vh] mb-24 w-screen flex justify-center relative overflow-hidden">
      {projects.map((e, i) => {
        let position = "translate-x-full";
        if (curr === i) {
          position = "!opacity-100 translate-x-0";
        }
        if (i === curr - 1 || (curr === 0 && i === projects.length - 1)) {
          position = "-translate-x-full";
        }

        return (
          <div
            key={i}
            className={`container mt-32 mx-auto p-4 md:p-0 absolute left-0 right-0 w-full h-full transition duration-500  z-10 ease-out ${position} opacity-0 skew-x-2`}
          >
            <CarouselCard index={i} src={e.url} />
          </div>
        );
      })}

      <div className="absolute lg:right-10 lg:top-1/3 text-4xl right-1/4 cursor-pointer hover:scale-105 hover:translate-x-1 z-10 ">
        <BsArrow90DegRight onClick={() => setCurr(curr + 1)} />
      </div>
      <div className="absolute lg:left-10 lg:top-1/3 text-4xl  left-1/4 hover:scale-105 hover:-translate-x-1 cursor-pointer z-10">
        <BsArrow90DegLeft onClick={() => setCurr(curr - 1)} />
      </div>
    </section>
  );
};

export default Projects;
