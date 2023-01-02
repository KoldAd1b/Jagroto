import React, { useEffect, useState } from "react";
/* eslint-disable @next/next/no-img-element */
import { BsArrow90DegLeft, BsArrow90DegRight } from "react-icons/bs";
import CarouselCard from "../Gen/CarouselCard";
import { projects } from "../../data/projects";

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
    <section
      className="h-[100vh] sm:h-[80vh] md:h-[70vh] mb-24 w-screen flex justify-center relative "
      id="projects"
    >
      <h1 className="heading"> Projects</h1>
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
            <CarouselCard index={i} src={e.url} {...e} />
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
