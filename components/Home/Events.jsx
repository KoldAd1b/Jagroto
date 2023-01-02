import React from "react";
import NewsCard from "../Gen/NewsCard";

const Events = () => {
  return (
    <section className="section mt-12 md:mt-0">
      <h1 className="heading ">News and Events </h1>
      <div className="flex flex-wrap mt-8 gap-8 justify-center">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </section>
  );
};

export default Events;
