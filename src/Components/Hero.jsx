import React from "react";

const Hero = () => {
  return (
    <section
      className="relative h-[85vh] flex flex-col justify-center items-center text-center text-white bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80')", // You can replace this with your own scenic travel image
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Main content */}
      <div className="relative z-10 max-w-2xl px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg bg-gradient-to-r from-[#01959A] to-teal-300 bg-clip-text text-transparent">
          Discover. Dream. Depart.
        </h1>
        <p className="uppercase tracking-widest text-sm text-gray-200 mb-3">Your journey begins here</p>

        <p className="mt-5 text-lg md:text-xl text-gray-100 leading-relaxed">
          Find breathtaking destinations, plan your adventures, and travel with
          freedom. Your next story starts here.
        </p>

        <button
          onClick={() => window.scrollTo({ top: 700, behavior: "smooth" })}
          className="mt-8 bg-[#01959A] hover:bg-[#01777c] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Start Your Journey
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 flex gap-2 animate-bounce">
        <span className="text-sm text-gray-200">Scroll to Explore</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5 text-gray-200"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
