import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { calculateArrivalTime, formatTimeTo12Hr } from "../../utils/timeFormat";
import downloadTicket from "../../utils/downloadTicket";

const TicketCard = ({ bookingData }) => {
  return (
    <div>
      {/* Card */}
      <div className="p-[16px] flex flex-col gap-[8px] w-full shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]">
        {/* First Row */}
        <div className="flex items-center justify-between">
          {/* Dats in Row 1*/}
          <div className="flex flex-col gap-[4px]">
            <h3 className="font-medium">Booking #{bookingData?.bookingId}</h3>
            <p className="text-black/50">
              Booked in: <span>{bookingData?.bookingDate}</span>
            </p>
          </div>

          <div>
            <span className="text-lime-400 font-bold">Confirmed</span>
          </div>
        </div>

        <hr />

        {/* Second Row */}
        <div className="flex items-center justify-between">
          {/* Departure */}
          <div className="flex flex-col gap-[4px]">
            <h2 className="font-medium">{bookingData?.sourceCity}</h2>
            <h3>
              {formatTimeTo12Hr(
                bookingData?.busId?.busSchedules?.departureTime
              )}
            </h3>
            <p className="text-black/50">Trip Date:</p>
          </div>

          {/* Icon */}
          <div>
            <MdOutlineArrowRightAlt />
          </div>

          {/* Arrival */}
          <div className="flex flex-col gap-[4px]">
            <h2 className="font-medium">{bookingData?.destinationCity}</h2>
            <h3>
              {formatTimeTo12Hr(
                calculateArrivalTime(
                  bookingData?.busId?.busSchedules?.departureTime,
                  bookingData?.busId?.routes?.duration
                )
              )}
            </h3>
            <p className="text-black/50">{bookingData?.tripDate}</p>
          </div>
        </div>

        <hr />

        {/* Third Row */}
        <div className="flex items-center justify-between">
          {/* Bus Name */}
          <div>
            <h2 className="font-medium">
              {bookingData?.busId?.busName}
              <span className="ml-[8px] opacity-50 font-light">
                ({bookingData?.busId?.travelAgency?.travel_agency_name})
              </span>
            </h2>
          </div>

          {/* Selected Seats */}
          <div>
            <div className="flex gap-[8px]">
              {bookingData?.seatName.map((data, index) => (
                <div
                  key={index}
                  className="px-[8px] py-[4px] rounded-[8px] text-white bg-gray-400"
                >
                  {data}
                </div>
              ))}
            </div>
          </div>

          {/* Price */}
          <div>
            <h2 className="font-medium">
              Rs.
              {bookingData?.busId?.routes?.price * bookingData?.seatName.length}
            </h2>
          </div>
        </div>

        <hr />

        {/* Fourth Row */}
        <div className="flex justify-end">
          <div className="flex gap-[16px]">
            <button
              className="border border-[#078DD7] rounded-[8px] text-[#078DD7] px-[32px] py-[12px]"
              onClick={() => downloadTicket(bookingData)}
            >
              Download Ticket
            </button>
            <button className="bg-[#078DD7] rounded-[8px] text-white px-[32px] py-[12px]">
              Cancle Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
