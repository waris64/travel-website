import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import TripForm from "../Components/TripForm";

const Booking = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-[#01959a] text-white py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Plan Your Dream Trip</h1>
          <p className="text-lg opacity-90">
            Select your destination, choose your dates, and let’s get going!
          </p>
        </section>

        <div className="max-w-4xl mx-auto p-6 bg-white -mt-12 shadow-xl rounded-2xl relative z-10 md:pb-22">
          <TripForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
