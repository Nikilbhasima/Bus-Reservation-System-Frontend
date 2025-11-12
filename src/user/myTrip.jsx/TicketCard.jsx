import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const TicketCard = () => {
  return (
    <div>
      {/* Card */}
      <div className="p-[16px] flex flex-col gap-[8px] w-full shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]">
        {/* First Row */}
        <div className="flex items-center justify-between">
          {/* Dats in Row 1*/}
          <div className="flex flex-col gap-[4px]">
            <h3 className="font-medium">Booking #1234567</h3>
            <p className="text-black/50">
              Booked in: <span>2025/11/11</span>
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
            <h2 className="font-medium">Kathmandu</h2>
            <h3>01:00 PM</h3>
            <p className="text-black/50">Nov 11, 2025</p>
          </div>

          {/* Icon */}
          <div>
            <MdOutlineArrowRightAlt />
          </div>

          {/* Arrival */}
          <div className="flex flex-col gap-[4px]">
            <h2 className="font-medium">Arghakhanchi</h2>
            <h3>08:45 PM</h3>
            <p className="text-black/50">Nov 11, 2025</p>
          </div>
        </div>

        <hr />

        {/* Third Row */}
        <div className="flex items-center justify-between">
          {/* Bus Name */}
          <div>
            <h2 className="font-medium">Deurali Yatayat</h2>
          </div>

          {/* Selected Seats */}
          <div>
            <div className="flex gap-[8px]">
              <div className="px-[8px] py-[4px] rounded-[8px] text-white bg-gray-400">
                Seat A1
              </div>
              <div className="px-[8px] py-[4px] rounded-[8px] text-white bg-gray-400">
                Seat A1
              </div>
            </div>
          </div>

          {/* Price */}
          <div>
            <h2 className="font-medium">Rs. 2400</h2>
          </div>
        </div>

        <hr />

        {/* Fourth Row */}
        <div className="flex justify-end">
          <div className="flex gap-[16px]">
            <button className="border border-[#078DD7] rounded-[8px] text-[#078DD7] px-[32px] py-[12px]">
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
