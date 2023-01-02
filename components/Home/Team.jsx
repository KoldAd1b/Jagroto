import React from "react";
import { team } from "../../data/team";

import TeamCard from "../Gen/TeamCard";

const Team = () => {
  return (
    <section className="section mt-[32vh] md:mt-12 mb-12">
      <h1 className="heading text-center block">Meet the Founding Team </h1>
      <div className="flex flex-wrap mt-8 gap-8 justify-center">
        {team.map(({ url }, i) => (
          <TeamCard key={i} img={url} />
        ))}
      </div>
    </section>
  );
};

export default Team;
