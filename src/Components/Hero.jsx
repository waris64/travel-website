import React from 'react';

const Hero = ({ heroImg, title, text, btnText }) => {
  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center text-white bg-black">
      <img
        src={heroImg}
        alt="hero-img"
        className="absolute  w-full h-full md:object-cover md:bg-contain   "
      />
      <div className="z-10 text-center px-4     ">
        <h1 className="text-4xl font-bold py-2 ">{title}</h1>
        <h3 className="py-4 text-lg font-semibold">{text}</h3>
        {btnText && (
          <a
            href="/"
            className="px-4 py-2 bg-white font-semibold rounded text-black hover:bg-gray-200 transition"
          >
            {btnText}
          </a>
        )}
      </div>
    </div>
  );
};
export default Hero;
