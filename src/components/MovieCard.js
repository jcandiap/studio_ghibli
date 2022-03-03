import React from "react";

export const MovieCard = ({ title, image, description }) => {
  
  const limitCharacter = description.substr(0, 150) + '...';
    return (
    <>
    <div className="flex flex-col items-center cursor-pointer bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 hover:-translate-y-1 hover:scale-105 duration-300 m-5">
        <img
          className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={ image }
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            { title }
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            { limitCharacter }
          </p>
        </div>
    </div>
    </>
  );
};
