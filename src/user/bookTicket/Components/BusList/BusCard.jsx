import React, { useState } from "react";
import PropTypes from "prop-types";
import Amenities from "./subComponents/Amenities";
import Terms from "./subComponents/Terms";
import Gallery from "./subComponents/Gallery";
import { useNavigate } from "react-router-dom";

const BusCard = ({ busData = {} }) => {
  const [activeTab, setActiveTab] = useState("Amenities");
  const navigate = useNavigate();

  // safe destructuring with defaults
  const {
    name = "Deurali Yatayat",
    busType = "AC",
    startTime = "10:45 AM",
    endTime = "06:00 PM",
    duration = "7.45hrs",
    from = "Kathmandu",
    to = "Deurali",
    price = 6500,
    seatsAvailable = 4,
    amenities = ["AC", "WIFI"],
  } = busData || {};

  const renderContent = () => {
    switch (activeTab) {
      case "Amenities":
        return <Amenities amenities={amenities} />;
      case "Terms":
        return <Terms />;
      case "Bus Gallery":
        return <Gallery />;
      case "Reviews":
        return (
          <div className="mt-3 text-sm text-gray-700">
            Reviews section coming soon...
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm mb-4">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:justify-between items-center">
        <div className="text-center md:text-left">
          <h2 className="font-semibold text-lg">
            {name}{" "}
            <span className="bg-yellow-400 text-white text-xs font-semibold px-2 py-[2px] rounded ml-1">
              Day
            </span>
          </h2>
          <p className="text-gray-500 text-sm">{busType}</p>
        </div>

        <div className="text-center md:text-right mt-2 md:mt-0 ">
          <p className="text-lg md:text-xl font-semibold text-gray-800">
            Rs.{price}
          </p>
          <p className="text-sm text-gray-600 mt-1">
            <span className="font-semibold">{seatsAvailable}</span> Seats
            Available
          </p>
        </div>
      </div>

      {/* Timing Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-4">
        <div className="flex flex-col items-center">
          <span className="font-bold text-xl md:text-2xl text-gray-800">
            {startTime}
          </span>
          <span className="text-sm text-gray-600">{from}</span>
        </div>

        <div className="text-gray-500 text-sm text-center my-2 md:my-0">
          {duration ? `Approx: ${duration}` : ""}
        </div>

        <div className="flex flex-col items-center">
          <span className="font-bold text-xl md:text-2xl text-gray-800">
            {endTime}
          </span>
          <span className="text-sm text-gray-600">{to}</span>
        </div>
      </div>

      <hr className="my-4" />

      {/* Submenu Links */}
      <div className="flex flex-wrap items-center text-sm text-gray-600 gap-4 border-b pb-2">
        {["Amenities", "Terms", "Bus Gallery", "Reviews"].map((item) => (
          <button
            key={item}
            onClick={() => setActiveTab(item)}
            className={`font-medium transition-colors ${
              activeTab === item ? "text-[#078DD7]" : "hover:text-[#078DD7]"
            }`}
          >
            {item}
          </button>
        ))}

        <button
          onClick={() => {
            navigate(`/book/viewBusSeat`);
          }}
          className="ml-auto bg-[#078DD7] text-white text-sm font-medium px-4 py-1.5 rounded hover:bg-[#067dc0] transition"
        >
          View Seats
        </button>
      </div>

      {/* Dynamic Content */}
      {renderContent()}
    </div>
  );
};

BusCard.propTypes = {
  busData: PropTypes.object,
  onViewSeats: PropTypes.func,
};

export default BusCard;
