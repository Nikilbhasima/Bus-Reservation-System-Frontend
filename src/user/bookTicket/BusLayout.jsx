import React, { useEffect, useState } from "react";
import { MdEventSeat } from "react-icons/md";
import {
  leftSeatListData,
  middleSeatListData,
  rightSeatListData,
} from "./busSeatList";

function BusLayout({ seatName, setSeat, bookingList, user }) {
  const [leftSeat, setLeftSeat] = useState(leftSeatListData);
  const [rightSeat, setRightSeat] = useState(rightSeatListData);
  const [lastSeat, setLastSeat] = useState(middleSeatListData);

  console.log("list of booking:", bookingList);

  useEffect(() => {
    const updateSeats = (seats) => {
      return seats.map((s) => {
        for (const booking of bookingList) {
          for (const seat of booking?.seatName) {
            if (s.seatName === seat) {
              return { ...s, booked: true };
            }
          }
        }
        return s;
      });
    };

    setLeftSeat(updateSeats(leftSeat));
    setRightSeat(updateSeats(rightSeat));
    setLastSeat(updateSeats(lastSeat));
  }, [bookingList]);

  // 🔹 Handle click for left side
  // Left side
  const handleLeftClick = (index) => {
    setLeftSeat((prev) =>
      prev.map((seat, i) => {
        if (i === index && !seat.booked) {
          const updated = { ...seat, isSelected: !seat.isSelected };

          setSeat((prevSeats) => {
            if (updated.isSelected) {
              // Only add if not already in array
              if (!prevSeats.includes(updated.seatName)) {
                return [...prevSeats, updated.seatName];
              }
              return prevSeats;
            } else {
              // Remove when unselected
              return prevSeats.filter((name) => name !== updated.seatName);
            }
          });

          return updated;
        }
        return seat;
      })
    );
  };

  // 🔹 Handle click for right side
  const handleRightClick = (index) => {
    setRightSeat((prev) =>
      prev.map((seat, i) => {
        if (i === index && !seat.booked) {
          const updated = { ...seat, isSelected: !seat.isSelected };
          setSeat((prevSeats) => {
            if (updated.isSelected) {
              if (!prevSeats.includes(updated.seatName)) {
                return [...prevSeats, updated.seatName];
              }
              return prevSeats;
            } else {
              return prevSeats.filter((name) => name !== updated.seatName);
            }
          });
          return updated;
        }
        return seat;
      })
    );
  };

  // 🔹 Handle click for last row
  const handleLastClick = (index) => {
    setLastSeat((prev) =>
      prev.map((seat, i) => {
        if (i === index && !seat.booked) {
          const updated = { ...seat, isSelected: !seat.isSelected };

          setSeat((prevSeats) => {
            if (updated.isSelected) {
              if (!prevSeats.includes(updated.seatName)) {
                return [...prevSeats, updated.seatName];
              }
              return prevSeats;
            } else {
              return prevSeats.filter((name) => name !== updated.seatName);
            }
          });
          return updated;
        }
        return seat;
      })
    );
  };

  return (
    <div className="relative flex flex-col border-[2px] border-[white] rounded-[10px] w-[344px] rounded-t-[40px] p-[24px] bg-[#078DD7] h-fit">
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

      <div className="h-[3px] bg-[white] ml-auto w-[90%] "></div>

      {/* Passenger seats */}
      <div className="flex justify-between mt-[24px] ">
        {/* Left side */}
        <div className="grid grid-cols-2 gap-[24px]">
          {leftSeat.map((data, index) => (
            <div
              key={index}
              // if condition required for bus driver
              onClick={() => {
                if (user != "driver") {
                  handleLeftClick(index);
                }
              }}
              className="relative"
            >
              <label
                className={`absolute font-bold text-[12px]
    top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
    ${
      data?.booked
        ? "text-white"
        : data?.isSelected
        ? "text-black"
        : "text-white"
    }`}
              >
                {data?.seatName}
              </label>
              <MdEventSeat
                className={`text-[40px] cursor-pointer
                ${
                  // if condition for bus driver
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
              onClick={() => {
                if (user != "driver") {
                  handleRightClick(index);
                }
              }}
              className="relative"
            >
              <label
                className={`absolute font-bold text-[12px]
    top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
    ${
      data?.booked
        ? "text-white"
        : data?.isSelected
        ? "text-black"
        : "text-white"
    }`}
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
            onClick={() => {
              if (user != "driver") {
                handleLastClick(index);
              }
            }}
            className="relative"
          >
            <label
              className={`absolute font-bold text-[12px]
    top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
    ${
      data?.booked
        ? "text-white"
        : data?.isSelected
        ? "text-black"
        : "text-white"
    }`}
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
