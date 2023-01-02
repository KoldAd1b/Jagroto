import React from "react";

const Upcoming = () => {
  return (
    <section className="mb-32 section text-gray-800">
      <h1 className=" heading text-center block">Upcoming projects</h1>

      <div className="flex flex-wrap items-center my-12 justify-center">
        <div className="grow-0 shrink-0 basis-auto  lg:w-5/12 -12 lg:mb-0 md:px-6 mb-12 bg-gradient-to-r p-12 rounded-lg from-rose-100 to-teal-100  w-4/5">
          <div
            className="relative overflow-hidden bg-no-repeat justify-center flex bg-cover rounded-lg shadow-lg "
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            <img
              src="/assets/logo.jpg"
              className="object-cover object-center "
            />
          </div>
        </div>

        <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12 md:px-6 ">
          <div className="flex mb-12">
            <div className="shrink-0">
              <div className="px-2 py-1 font-bold rounded-md shadow-lg bg-black text-white">
                &rarr;
              </div>
            </div>
            <div className="grow ml-4">
              <p className="font-bold mb-1">Winter 2023</p>
              <p className="text-gray-500">
                Winter charity project coming soon. Help provide warm meals and
                essentials for those in need.
              </p>
            </div>
          </div>

          <div className="md:inline-flex flex mb-12 mx-auto  lg:mx-0 bg-white shadow-xl p-4 text-black rounded-md items-center  gap-x-4  ">
            <p className="text-md font-bold">
              To suggest new projects contact us at
            </p>
            <a
              href="mailto:Jagroto.org@gmail.com"
              className="py-2 px-3 bg-gray-200 text-red-600 font-bold  border-2 rounded-md hover:text-white hover:bg-red-600 transition"
            >
              Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upcoming;
