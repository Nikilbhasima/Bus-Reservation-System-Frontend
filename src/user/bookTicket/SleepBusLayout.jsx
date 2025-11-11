import { useState } from "react";
import { sleeperSeat } from "./busSeatList";

function SleepBusLayout() {
  const [sleeperSeatData, setSleeperSeat] = useState(sleeperSeat);

  const handleClick = (index) => {
    setSleeperSeat((prevSeats) =>
      prevSeats.map((seat, i) =>
        // prevent selecting booked seats
        i === index && !seat.booked
          ? { ...seat, isSelected: !seat.isSelected }
          : seat
      )
    );
  };

  return (
    <div className="relative flex flex-col border-[2px] border-[black] rounded-[10px] w-[344px] rounded-t-[40px] p-[24px]">
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
      <div className="h-[3px] bg-[black] ml-auto w-[90%]"></div>

      {/* Sleeper bed section */}
      <div className="flex justify-between mt-auto">
        {sleeperSeatData.map((data, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`flex relative w-[103px] h-[168px] border-[3px] rounded-[10px] cursor-pointer 
              ${
                data.booked
                  ? "border-[#FF0000] cursor-not-allowed"
                  : data.isSelected
                  ? "border-[#E5FF00]"
                  : "border-[black]"
              }`}
          >
            <label className="text-[30px] font-bold mx-auto absolute left-[2rem] top-[3rem]">
              {data.seatName}
            </label>

            <div
              className={`h-[15px] w-[85%] rounded-[50px] mt-auto mx-auto mb-[8px] 
                ${
                  data.booked
                    ? "bg-[#FF0000]"
                    : data.isSelected
                    ? "bg-[#E5FF00]"
                    : "bg-[black]"
                }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SleepBusLayout;
