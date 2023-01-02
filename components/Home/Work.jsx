/* eslint-disable @next/next/no-img-element */
import React from "react";
import works from "../../data/work";
import Card from "../Gen/Card";

const Work = () => {
  return (
    <section className="section my-20">
      <h1 className="heading">What We Do</h1>

      <div className="flex flex-wrap mt-8 gap-8 items-center justify-center">
        {works.map((e, i) => {
          return (
            <Card
              key={Math.random() + new Date().toISOString() + i}
              {...e}
              index={i}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Work;
