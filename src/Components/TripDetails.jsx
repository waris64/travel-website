import React from "react";
import { useTripStore } from "../store/tripStore";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const TripDetails = () => {
  const { tripData } = useTripStore();
  const { id } = useParams();
  const navigate = useNavigate();

  if (!tripData) {
    return (
      <div className="flex  flex-col items-center justify-center min-h-screen text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          No trip data found 😢
        </h2>
        <button
          onClick={() => navigate("/booking")}
          className="bg-[#01959a] text-white px-6 py-2 rounded-lg hover:bg-[#017c80]"
        >
          Plan a Trip
        </button>
      </div>
    );
  }

  const daysArray = Array.from({ length: tripData.days }, (_, i) => i + 1);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-grow py-12 px-6 md:px-20">
        <h1 className="text-3xl font-bold text-[#01959a] text-center mb-8">
          Your Trip Plan ✈️
        </h1>

        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            {tripData.from} → {tripData.to}
          </h2>
          <p className="text-gray-600 mb-4">
            Duration: {tripData.days} days | {tripData.startDate} →{" "}
            {tripData.endDate}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {daysArray.map((day) => (
              <div
                key={day}
                className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-[#01959a] mb-2">
                  Day {day}
                </h3>
                <p className="text-gray-700">
                  Activities for day {day} will appear here soon — including
                  meals, sightseeing, and transport.
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TripDetails;
