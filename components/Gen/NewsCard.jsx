import React from "react";

const NewsCard = () => {
  return (
    <div>
      <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <h5 class="text-gray-900 text-2xl leading-tight font-bold mb-2 ">
          Card title
        </h5>
        <p class="text-gray-700 text-base mb-4 opacity-70">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque sunt
          hic ex!
        </p>
        <button
          type="button"
          class=" inline-block px-6 py-2.5 bg-teal-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-150 ease-in-out"
        >
          Button
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
