import React, { useState } from "react";
import { MdEventSeat } from "react-icons/md";
import {
  leftSeatListData,
  middleSeatListData,
  rightSeatListData,
} from "./busSeatList";

function BusLayout() {
  const [leftSeat, setLeftSeat] = useState(leftSeatListData);
  const [rightSeat, setRightSeat] = useState(rightSeatListData);
  const [lastSeat, setLastSeat] = useState(middleSeatListData);

  // 🔹 Handle click for left side
  const handleLeftClick = (index) => {
    setLeftSeat((prev) =>
      prev.map((seat, i) =>
        i === index && !seat.booked
          ? { ...seat, isSelected: !seat.isSelected }
          : seat
      )
    );
  };

  // 🔹 Handle click for right side
  const handleRightClick = (index) => {
    setRightSeat((prev) =>
      prev.map((seat, i) =>
        i === index && !seat.booked
          ? { ...seat, isSelected: !seat.isSelected }
          : seat
      )
    );
  };

  // 🔹 Handle click for last row
  const handleLastClick = (index) => {
    setLastSeat((prev) =>
      prev.map((seat, i) =>
        i === index && !seat.booked
          ? { ...seat, isSelected: !seat.isSelected }
          : seat
      )
    );
  };

  return (
    <div className="relative flex flex-col border-[2px] border-[black] rounded-[10px] w-[344px] rounded-t-[40px] p-[24px] bg-[#333333]">
      {/* Door */}
      <div className="absolute border-[2px] border-[black] px-[18px] -rotate-90 -left-[2.3rem] top-[3rem] bg-[white]">
        Door
      </div>

      {/* Driver seat */}
      <div className="flex flex-right mb-[24px]">
        <img
          src="/images/svg/driver.svg"
          className="w-[40px] ml-auto"
          alt="driver"
        />
      </div>
      <div className="h-[3px] bg-[black] ml-auto w-[90%] "></div>

      <div className="h-[3px] bg-[black] ml-auto w-[90%] mt-auto"></div>

      {/* Passenger seats */}
      <div className="flex justify-between mt-[24px] ">
        {/* Left side */}
        <div className="grid grid-cols-2 gap-[24px]">
          {leftSeat.map((data, index) => (
            <div
              key={index}
              onClick={() => handleLeftClick(index)}
              className="relative"
            >
              <label
                className={`absolute font-bold text-[12px]
    top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
    ${
      data?.booked
        ? "text-yellow"
        : data?.isSelected
        ? "text-black"
        : "text-white"
    }`}
                style={{
                  textShadow: "0 0 3px rgba(0,0,0,0.8)", // optional for visibility
                }}
              >
                {data?.seatName}
              </label>
              <MdEventSeat
                className={`text-[40px] cursor-pointer
                ${
                  data.booked
                    ? "text-[#FF0000] cursor-not-allowed"
                    : data.isSelected
                    ? "text-[#E5FF00]"
                    : "text-[black]"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Right side */}
        <div className="grid grid-cols-2 gap-[24px]">
          {rightSeat.map((data, index) => (
            <div
              key={index}
              onClick={() => handleRightClick(index)}
              className="relative"
            >
              <label
                className={`absolute font-bold text-[12px]
    top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
    ${
      data?.booked
        ? "text-yellow"
        : data?.isSelected
        ? "text-black"
        : "text-white"
    }`}
                style={{
                  textShadow: "0 0 3px rgba(0,0,0,0.8)", // optional for visibility
                }}
              >
                {data?.seatName}
              </label>
              <MdEventSeat
                className={`text-[40px] cursor-pointer
                ${
                  data.booked
                    ? "text-[#FF0000] cursor-not-allowed"
                    : data.isSelected
                    ? "text-[#E5FF00]"
                    : "text-[black]"
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Last row */}
      <div className="flex gap-[24px] mt-[24px] justify-center">
        {lastSeat.map((data, index) => (
          <div
            key={index}
            onClick={() => handleLastClick(index)}
            className="relative"
          >
            <label
              className={`absolute font-bold text-[12px]
    top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
    ${
      data?.booked
        ? "text-yellow"
        : data?.isSelected
        ? "text-black"
        : "text-white"
    }`}
              style={{
                textShadow: "0 0 3px rgba(0,0,0,0.8)", // optional for visibility
              }}
            >
              {data?.seatName}
            </label>
            <MdEventSeat
              className={`text-[40px] cursor-pointer
              ${
                data.booked
                  ? "text-[#FF0000] cursor-not-allowed"
                  : data.isSelected
                  ? "text-[#E5FF00]"
                  : "text-[black]"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BusLayout;
