import React from "react";

const About = () => {
  return (
    <section className="flex min-h-[40vh] my-24 mt-48" id="about">
      <div className="lg:flex-1 basis-1/3 bg-gradient-to-r  from-teal-400 to-sky-400"></div>
      <div className="lg:basis-1/2 flex-1 px-5 py-6 drop-shadow-xl shadow-lg shadow-black">
        <h2 className=" uppercase mb-4 text-4xl font-bold border-b-4  border-sky-400 py-2 ">
          About Us
        </h2>
        <p className="text-lg text-black/50 font-sans mb-2">
          At Jagroto, we are committed to eliminating poverty and improving the
          lives of those in need. Our organization was founded by a group of
          passionate young activists who were driven by a strong desire to make
          a difference in the world. Despite the challenges and obstacles we
          faced at the start, we were determined to stand by the side of those
          in need and make a positive impact in our communities. Through hard
          work and perseverance, we have been able to conduct a variety of
          social activities to help those in need, including supporting orphan
          children and providing assistance to those living in poverty.
        </p>
        <p className="text-lg text-black/50 font-sans">
          We believe that everyone deserves the opportunity to live a fulfilling
          and dignified life, and we are dedicated to making a lasting
          difference in the world. If you share our commitment to creating a
          better future for all, we invite you to join us in our mission.
          Together, we can make a real difference in the lives of those in need
          and help build a brighter, more equitable world.
        </p>
      </div>
      <div className="flex-1 bg-gradient-to-r hidden lg:block"></div>
    </section>
  );
};

export default About;
