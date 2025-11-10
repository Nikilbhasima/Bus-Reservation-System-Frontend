import React, { useState } from "react";
import { MdEventSeat } from "react-icons/md";
import {
  leftSeatListData,
  middleSeatListData,
  rightSeatListData,
} from "./busSeatList";

function BusLayout() {
  const [lastSeat, setLastSeat] = useState(middleSeatListData);
  const [leftSeat, setLeftSeat] = useState(leftSeatListData);
  const [rightSeat, setRightSeat] = useState(rightSeatListData);
  return (
    <div className="relative border-[2px] border-[black] roundex-[10px] w-[344px] rounded-t-[40px] p-[24px] ml-[10rem]">
      <div className="absolute border-[2px] border-[black] px-[18px] -rotate-90 -left-[2.3rem] top-[3rem] bg-[white]">
        Door
      </div>
      {/* driver seat */}
      <div className="flex flex-right mb-[24px]">
        <img
          src="/images/svg/driver.svg"
          className="w-[40px] ml-auto"
          alt="driver"
        />
      </div>
      <div className="h-[3px] bg-[black] ml-auto w-[90%]"></div>
      {/* middle seat */}
      <div className="flex justify-between mt-[24px]">
        {/* left side seat */}
        <div className="grid grid-cols-2 gap-[24px] ">
          {leftSeat.map((data, index) => (
            <MdEventSeat
              key={index}
              className={`text-[40px] ${
                data.booked ? "text-[#FF0000]" : "text-[black]"
              }`}
            />
          ))}
        </div>
        {/* right side seat */}
        <div className="grid grid-cols-2 gap-[24px]">
          {rightSeat.map((data, index) => (
            <MdEventSeat
              key={index}
              className={`text-[40px] ${
                data.booked ? "text-[#FF0000]" : "text-[black]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* last seat */}
      <div className="flex gap-[24px] mt-[24px]">
        {lastSeat.map((data, index) => (
          <MdEventSeat
            key={index}
            className={`text-[40px] ${
              data.booked ? "text-[#FF0000]" : "text-[black]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default BusLayout;
