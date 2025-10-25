import React, { useState } from "react";
import {toast} from 'react-toastify'
const TripForm = () =>  {

  const destinations = [
    "Islamabad",
    "Lahore",
    "Karachi",
    "Skardu",
    "Hunza",
    "Swat",
    "Murree",
    "Kumrat",
    "Gilgit",
  ];

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [days, setDays] = useState(null);

  const handleDateChange = (start, end) => {
    if (start && end) {
      const startD = new Date(start);
      const endD = new Date(end);
      const diff = Math.ceil((endD - startD) / (1000 * 60 * 60 * 24));
      setDays(diff >= 0 ? diff + 1 : null);
    } else {
      setDays(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (from === to) {
      toast.error("🚫 'From' and 'To' destinations cannot be the same!");
      return;
    }

    if (!from || !to || !startDate || !endDate) {
      toast.error("⚠️ Please fill all fields before submitting!");
      return;
    }

    if (!days || days <= 0) {
      toast.error("⚠️ Please select valid travel dates!");
      return;
    }

    toast.success(
      `Trip confirmed!\nFrom: ${from}\nTo:${to}\nDuration: ${days} days\nDate: ${startDate} → ${endDate}`
    );
  };

  return (
    <section className="w-full max-w-lg mx-auto mt-12 bg-white shadow-md rounded-2xl p-8 border border-gray-100">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Plan Your Trip
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* From Destination */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2.5 focus:outline-none focus:ring-2 focus:ring-[#01959a]"
          >
            <option value="">Select starting point</option>
            {destinations.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        {/* To Destination */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2.5 focus:outline-none focus:ring-2 focus:ring-[#01959a]"
          >
            <option value="">Select destination</option>
            {destinations.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        {/* Date Inputs */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">From Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => {
                setStartDate(e.target.value);
                handleDateChange(e.target.value, endDate);
              }}
              className="w-full border border-gray-300 rounded-md p-2.5 focus:outline-none focus:ring-2 focus:ring-[#01959a]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">To Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => {
                setEndDate(e.target.value);
                handleDateChange(startDate, e.target.value);
              }}
              className="w-full border border-gray-300 rounded-md p-2.5 focus:outline-none focus:ring-2 focus:ring-[#01959a]"
            />
          </div>
        </div>

        {/* Days Count */}
        <div className="text-center text-gray-700">
          {days !== null && days > 0 ? (
            <p>
              📅 <span className="font-semibold text-[#01959a]">{days}</span> day
              {days > 1 ? "s" : ""} trip planned
            </p>
          ) : (
            <p className="text-gray-400 italic">Select dates to calculate duration</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#01959a] text-white font-semibold py-2.5 rounded-md hover:bg-[#017d82] transition"
        >
          Submit Trip
        </button>
      </form>
    </section>
  );
};

export default TripForm;
