import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="py-12 hero-gradient w-screen  relative">
      <div className={`flex items-center px-12 lg:px-20 xl:px-28`}>
        <h1 className=" font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r  from-teal-600 to-cyan-200 z-10 flex-1  ">
          <Link href={"/"}>Jagroto</Link>
        </h1>

        <div
          className={`relative w-10 lg:hidden  h-8 cursor-pointer group   transition ${
            open && "rotate-90"
          }`}
          onClick={() => setOpen((prev) => !prev)}
        >
          <div
            className={`h-2 w-full bg-black absolute transition origin-right ${
              open && "-rotate-45"
            }`}
          ></div>
          <div className={`h-2 w-full bg-black absolute top-1/2 `}></div>
          <div
            className={`h-2 w-full bg-black absolute top-full transition origin-right  ${
              open && "rotate-45"
            }`}
          ></div>
        </div>

        <ul
          className={`z-50 flex-1 justify-evenly text-teal-800  font-sans  lg:flex absolute  top-full lg:static transition duration-500  w-full p-10 lg:p-0 lg:translate-x-0 -mx-12 font-bold ${
            open
              ? "translate-x-0  text-teal-100/75 font-[100] "
              : "-translate-x-full"
          }`}
        >
          <li className="w-full flex justify-center">
            <Link
              className={` nav-link ${
                open
                  ? "bg-gradient-to-r from-teal-400 to-teal-900 shadow-blue-300/50 "
                  : ""
              }`}
              href={"/about-us"}
            >
              <span className="ml-2">About Us</span>
            </Link>
          </li>
          <li className="w-full flex justify-center ">
            <Link
              href={"/campaign"}
              className={`nav-link ${
                open
                  ? "bg-gradient-to-r from-teal-400 to-teal-900 shadow-blue-300/50"
                  : ""
              }`}
            >
              <span className="ml-2">Campaign</span>
            </Link>
          </li>
          <li className="w-full flex justify-center">
            <Link
              href={"/contact-us"}
              className={` nav-link ${
                open
                  ? "bg-gradient-to-r from-teal-400 to-teal-900 shadow-blue-300/50"
                  : ""
              }`}
            >
              <span className="ml-2  ">Contact Us</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
