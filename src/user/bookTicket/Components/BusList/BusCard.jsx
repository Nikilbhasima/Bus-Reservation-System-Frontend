import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Amenities from "./subComponents/Amenities";
import Terms from "./subComponents/Terms";
import Gallery from "./subComponents/Gallery";
import { useNavigate } from "react-router-dom";
import {
  calculateArrivalTime,
  formatTimeTo12Hr,
} from "../../../../utils/timeFormat";
import { useDispatch } from "react-redux";
import { getBookingsByBusIdAndDate } from "../../../../redux/userSlice/bookingSlice/BookingThunks";

const BusCard = ({ busData = {}, busDetail, date }) => {
  const [activeTab, setActiveTab] = useState("Amenities");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [bookingList, setBookingList] = useState([]);

  const [numberOfBookedSeat, setNumberOfBookedSeat] = useState(0);

  useEffect(() => {
    if (busDetail?.busId && date) {
      getAllBusBooking();
    }
  }, [busDetail?.busId, date]);

  useEffect(() => {
    if (bookingList && bookingList.length > 0) {
      let count = 0;
      for (const booking of bookingList) {
        count += booking?.seatName?.length ?? 0;
      }
      setNumberOfBookedSeat(count);
    } else {
      setNumberOfBookedSeat(0);
    }
  }, [bookingList, date]);

  const getAllBusBooking = async () => {
    try {
      const response = await dispatch(
        getBookingsByBusIdAndDate({ busId: busDetail?.busId, tripDate: date })
      );
      if (response.meta.requestStatus === "fulfilled") {
        setBookingList(response.payload);
      } else {
        console.log("error to fetch booking detail");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Amenities":
        return <Amenities amenities={busDetail?.amenities} />;
      case "Cancellation Terms":
        return <Terms />;
      case "Bus Gallery":
        return <Gallery images={busDetail?.busphotos} />;
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
            {busDetail?.busName}{" "}
            <span className="text-[12px] opacity-50">
              ({busDetail?.travelAgency?.travel_agency_name})
            </span>
            <span className="bg-yellow-400 text-white text-xs font-semibold px-2 py-[2px] rounded ml-1">
              {busDetail?.busSchedules?.period}
            </span>
          </h2>
          <p className="text-gray-500 text-sm">{busDetail?.busType}</p>
        </div>

        <div className="text-center md:text-right mt-2 md:mt-0 ">
          <p className="text-lg md:text-xl font-semibold text-gray-800">
            Rs.{busDetail?.routes?.price}
          </p>
          <p className="text-sm text-gray-600 mt-1">
            <span className="font-semibold mr-[4px]">
              {busDetail?.totalSeats - numberOfBookedSeat}
            </span>
            Seats Available
          </p>
        </div>
      </div>

      {/* Timing Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-4">
        <div className="flex flex-col items-center">
          <span className="font-bold text-xl md:text-2xl text-gray-800">
            {formatTimeTo12Hr(busDetail?.busSchedules?.departureTime)}
          </span>
          <span className="text-sm text-gray-600">
            {busDetail?.routes?.sourceCity.includes(
              busDetail?.currentBusLocation
            )
              ? busDetail?.routes?.sourceCity
              : busDetail?.routes?.destinationCity}
          </span>
        </div>

        <div className="text-gray-500 text-sm text-center my-2 md:my-0">
          {`Approx: ${(busDetail?.routes?.duration / 60).toFixed(2)} Hrs`}
        </div>

        <div className="flex flex-col items-center">
          <span className="font-bold text-xl md:text-2xl text-gray-800">
            {formatTimeTo12Hr(
              calculateArrivalTime(
                busDetail?.busSchedules?.departureTime,
                busDetail?.routes?.duration
              )
            )}
          </span>
          <span className="text-sm text-gray-600">
            {!busDetail?.routes?.destinationCity
              ?.toLowerCase()
              .includes(busDetail?.currentBusLocation?.toLowerCase())
              ? busDetail?.routes?.destinationCity
              : busDetail?.routes?.sourceCity}
          </span>
        </div>
      </div>

      <hr className="my-4" />

      {/* Submenu Links */}
      <div className="flex flex-wrap items-center text-sm text-gray-600 gap-4 border-b pb-2">
        {["Amenities", "Cancellation Terms", "Bus Gallery", "Reviews"].map(
          (item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item)}
              className={`font-medium transition-colors ${
                activeTab === item ? "text-[#078DD7]" : "hover:text-[#078DD7]"
              }`}
            >
              {item}
            </button>
          )
        )}

        <button
          onClick={() => {
            navigate(`/book/viewBusSeat/${busDetail?.busId}/${date}`);
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
