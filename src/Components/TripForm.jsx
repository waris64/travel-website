import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TripForm = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [days, setDays] = useState(0);

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

  // Calculate duration
  useEffect(() => {
    if (startDate && endDate) {
      const diff =
        (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24);
      setDays(diff >= 0 ? diff + 1 : 0);
    }
  }, [startDate, endDate]);

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!from || !to || !startDate || !endDate) {
      toast.error("Please fill all fields before submitting!");
      return;
    }

    if (from === to) {
      toast.warning("Departure and Destination cannot be the same!");
      return;
    }

    if (days <= 0) {
      toast.error("Please select valid travel dates!");
      return;
    }

    toast.success(
      `Trip confirmed!\nFrom: ${from}\nTo: ${to}\nDuration: ${days} days\nDate: ${startDate} → ${endDate}`
    );
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
          <label className="block text-gray-600 font-medium mb-2">
            From
          </label>
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
          <label className="block text-gray-600 font-medium mb-2">
            To
          </label>
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

      {/* Duration */}
      {days > 0 && (
        <div className="text-center text-gray-700 font-medium">
          Your trip will last{" "}
          <span className="text-[#01959a] font-semibold">{days}</span> days.
        </div>
      )}

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className="w-full md:w-1/2 bg-[#01959a] text-white py-3 rounded-lg font-semibold hover:bg-[#017c80] transition duration-300"
        >
          Confirm Trip
        </button>
      </div>
    </form>
  );
};

export default TripForm;
