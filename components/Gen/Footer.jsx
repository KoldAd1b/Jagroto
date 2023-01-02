import React from "react";

const Footer = () => {
  return (
    <footer
      id="footer"
      aria-label="Site Footer"
      className=" mt-24 hero-gradient text-black"
    >
      <div className="mx-auto max-w-screen-xl px-4 pt-32 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-4xl font-extrabold sm:text-6xl font-serif mb-8">
            Take a path towards healing
          </p>

          <span
            className="lg:text-xl  bg-[#03a6aa] text-white  px-6 py-4  md:w-4/6 justify-center hover:bg-[#fea609] hover:text-black transition rounded-md font-bold  hover:shadow-lg active:translate-y-0 hover:-translate-y-2"
            href=""
          >
            Call us at (+880) 01920-958984
          </span>
        </div>

        <div className="mt-32 border-t border-white/25 pt-12 sm:flex sm:items-center sm:justify-between text-teal-800 ">
          <ul
            aria-label="Footer Nav"
            className="flex justify-center gap-4  sm:justify-start font-sans text-lg"
          >
            <li href="" className="hover:opacity-75 decoration-none">
              FAQs
            </li>
            <li href="" className="hover:opacity-75">
              Contact
            </li>
            <li href="" className="hover:opacity-75">
              Our Service
            </li>
          </ul>

          <div className="mt-6 flex justify-center gap-6 sm:mt-0 sm:justify-end text-teal-800">
            <a
              className="rounded-full border border-white/25 p-2 hover:opacity-75"
              href="https://www.facebook.com/groups/jagrotofoundationbangladesh/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only"> Facebook </span>

              <svg
                className="h-12 w-12"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
