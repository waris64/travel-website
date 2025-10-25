// 📄 File: src/Components/TripItinerary.jsx
import React from "react";

const TripItinerary = ({ day, title, description }) => {
  return (
    <div className="border-l-4 border-[#01959a] pl-4 mb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-1">
        Day {day}: {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default TripItinerary;
