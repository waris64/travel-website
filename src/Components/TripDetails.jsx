import React, { useEffect, useState } from "react";
import { useTripStore } from "../store/tripStore";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { generateMockItinerary } from "../utils/generateItinerary";

const TripDetails = () => {
  const { tripData } = useTripStore();
  const { id } = useParams();
  const navigate = useNavigate();
  const [itinerary, setItinerary] = useState([]);

  useEffect(() => {
    if (tripData) {
      const mockData = generateMockItinerary(tripData);
      setItinerary(mockData);
    }
  }, [tripData]);

  if (!tripData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
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

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-grow py-16 px-6 md:px-20">
        <h1 className="text-3xl font-bold text-center text-[#01959a] mb-4">
          {tripData.from} → {tripData.to}
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Duration: {tripData.days} days | {tripData.startDate} → {tripData.endDate}
        </p>

        <div className="space-y-8">
          {itinerary.map((day) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: day.day * 0.05 }}
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-6"
            >
              <h2 className="text-2xl font-semibold text-[#01959a] mb-2">
                Day {day.day}: {day.title}
              </h2>
              <p className="text-gray-700 mb-3">{day.description}</p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <p>🍽️ Meals: {day.meals.join(", ")}</p>
                {day.hotel && (
                  <p>
                    🏨 <span className="font-medium">{day.hotel}</span>
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TripDetails;
