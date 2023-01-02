/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  const [submit, setSubmit] = useState(false);
  const [status, setStatus] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status)
      setTimeout(() => {
        setStatus(false);
        setEmail("");
      }, 2000);
  }, [status]);

  const click = () => {
    setSubmit(true);

    setTimeout(() => {
      setSubmit(false);
      setStatus(true);
    }, 4000);
  };

  return (
    <div className="flex flex-col ">
      <section className="section hero-gradient py-12 ">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="w-1/2 text-center lg:text-left mb-12 pr-6">
            <h1 className="font-black text-5xl md:text-7xl  capitalize text-[#193332] flex flex-col font-sans ">
              A path
              <span>Towards Healing </span>
            </h1>
            <p className="lg:text-xl text-md text-gray-700 font-serif my-8  ">
              Charity is an act of a soft heart. Let us help others with the
              best of our abilities
            </p>

            <button className="inline-flex gap-x-4 items-center lg:text-xl bg-[#03a6aa] text-white font-extralight px-6 py-4 rounded-md md:w-4/6 justify-center hover:bg-[#fea609] hover:text-black  transition hover:-translate-y-1 hover:shadow-lg active:translate-y-0    ">
              <FaPlay /> Learn more
            </button>
          </div>
          <div className="lg:w-1/2 w-4/5 relative mb-12 ">
            <img
              src={"/assets/charity_ramadan.jpg"}
              alt="donation_illustration"
              className="w-full h-full object-cover z-10 relative"
            />
            <div className="w-full h-full absolute border-4 border-white -top-10 left-2/4"></div>
            <div className="w-full h-full absolute border-4 border-white -bottom-1/4 right-12 hidden lg:block xl:hidden"></div>
          </div>
        </div>
      </section>
      <div className="flex flex-col gap-y-8 md:flex-row justify-between section items-center py-16  bg-[#12b9bf] w-screen ">
        <div>
          <h2 className="text-4xl text-[#daffff] font-serif tracking-wide">
            Get in touch with us
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center md:w-2/5 gap-y-4">
          <input
            type="text"
            className="outline-none w-full bg-teal-600 px-6 py-4 shadow-md text-white placeholder:text-gray-300 rounded-md text-md focus:ring-2 ring-gray-300 transition duration-500"
            placeholder="Your email"
            onChange={(e) => setEmail(e.target.value)}
            value={
              status
                ? submit
                  ? ""
                  : "Your response has been submitted"
                : email
            }
            disabled={status}
          />
          <button
            className="items-center lg:text-xl bg-[#f9f4f4] text-black font-extralight ml-4 px-6 py-4 rounded-md  justify-center hover:bg-blue-600 hover:text-white transition hover:-translate-y-1 hover:shadow-lg active:translate-y-0 "
            onClick={click}
            disabled={submit}
          >
            {submit ? "Loading..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
