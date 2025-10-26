import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useTripStore } from "../store/tripStore";
import {generateTripPlan} from "../services/geminiService"; 

const TripForm = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [days, setDays] = useState(0);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const destinations = [
    "Paris",
    "London",
    "New York",
    "Tokyo",
    "Dubai",
    "Istanbul",
    "Bali",
    "Cairo",
  ];

  useEffect(() => {
    if (startDate && endDate) {
      const diff =
        (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24);
      setDays(diff >= 0 ? diff + 1 : 0);
    }
  }, [startDate, endDate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!from || !to || !startDate || !endDate)
      return toast.error("Please fill all fields before submitting!");

    if (from === to)
      return toast.warning("Departure and Destination cannot be the same!");

    if (days <= 0) return toast.error("Please select valid travel dates!");

    const formData = { from, to, startDate, endDate, days };
    setLoading(true);
    toast.info("Generating your personalized itinerary... ✈️");

    try {
      // 🧠 Generate itinerary using Gemini
      const itinerary = await   generateTripPlan(formData);

      if (!itinerary) {
        toast.error("Failed to generate itinerary. Try again later.");
        setLoading(false);
        return;
      }

      // 🧳 Save to Zustand
      useTripStore.getState().setTripData({ ...formData, itinerary });

      // Generate unique trip ID
      const tripId = crypto.randomUUID();

      // ✅ Redirect to Trip Details
      navigate(`/trip/${tripId}`);

      toast.success(
        `Trip from ${from} to ${to} confirmed! (${days} days planned) 🌍`
      );
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong while generating your trip plan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-white rounded-2xl shadow-md p-8 space-y-6 border border-gray-100"
    >
      <h2 className="text-2xl font-semibold text-center text-[#01959a]">
        Book Your Trip
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* From */}
        <div>
          <label className="block text-gray-600 font-medium mb-2">From</label>
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01959a]"
          >
            <option value="">Select departure</option>
            {destinations.map((city, idx) => (
              <option key={idx} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* To */}
        <div>
          <label className="block text-gray-600 font-medium mb-2">To</label>
          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01959a]"
          >
            <option value="">Select destination</option>
            {destinations.map((city, idx) => (
              <option key={idx} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Start Date */}
        <div>
          <label className="block text-gray-600 font-medium mb-2">
            Start Date
          </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01959a]"
          />
        </div>

        {/* End Date */}
        <div>
          <label className="block text-gray-600 font-medium mb-2">
            End Date
          </label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01959a]"
          />
        </div>
      </div>

      {days > 0 && (
        <div className="text-center text-gray-700 font-medium">
          Your trip will last{" "}
          <span className="text-[#01959a] font-semibold">{days}</span> days.
        </div>
      )}

      <div className="text-center">
        <button
          type="submit"
          disabled={loading}
          className={`w-full md:w-1/2 py-3 rounded-lg font-semibold transition duration-300 ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#01959a] text-white hover:bg-[#017c80]"
          }`}
        >
          {loading ? "Generating Plan..." : "Confirm Trip"}
        </button>
      </div>
    </form>
  );
};

export default TripForm;
