import React from "react";

const About = () => {
  return (
    <section className="flex min-h-[40vh] my-24 mt-48">
      <div className="lg:flex-1 basis-1/3 bg-gradient-to-r  from-teal-400 to-sky-400"></div>
      <div className="lg:basis-1/2 flex-1 px-5 py-6 drop-shadow-xl shadow-lg shadow-black">
        <h2 className=" uppercase mb-4 text-4xl font-bold border-b-4  border-sky-400 py-2 ">
          About Us
        </h2>
        <p className="text-lg text-black/50 font-sans mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          porro voluptatem vitae quia qui nisi at voluptatum, ad, nostrum illo
          beatae nihil numquam eos tenetur, nam in velit. Ut in, facere adipisci
          magnam suscipit quaerat nam inventore, nesciunt eveniet debitis non
          ipsam beatae repellendus voluptates nostrum eius quae quibusdam quo
          doloribus possimus consequuntur est. Vero necessitatibus modi
          nisisint.
        </p>
        <p className="text-lg text-black/50 font-sans">
          Assumenda enim nobis maiores sapiente porro fuga? Praesentium eius nam
          assumenda possimus, labore rerum officiis quam molestias, architecto
          id pariatur? Neque consequuntur quis voluptatem aliquam exercitationem
          tempore eligendi, explicabo, sapiente sunt tenetur quia fugit repellat
          voluptas. Alias ratione ipsum necessitatibus sed?
        </p>
      </div>
      <div className="flex-1 bg-gradient-to-r hidden lg:block"></div>
    </section>
  );
};

export default About;
