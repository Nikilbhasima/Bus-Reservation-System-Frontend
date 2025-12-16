import { useEffect, useState } from "react";
import { sleeperSeat } from "./busSeatList";

function SleepBusLayout({ seatName, setSeat, bookingList, user }) {
  const [sleeperSeatData, setSleeperSeat] = useState(sleeperSeat);

  const handleClick = (index) => {
    setSleeperSeat((prev) =>
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

  useEffect(() => {
    setSleeperSeat((pre) =>
      pre.map((s) => {
        for (const booking of bookingList) {
          for (const seat of booking?.seatName) {
            if (s.seatName === seat) {
              return { ...s, booked: true };
            }
          }
        }
        return s;
      })
    );
  }, [bookingList]);

  return (
    <div className="relative flex flex-col border-[2px] border-[white] rounded-[10px] bg-[#078DD7] w-[344px] rounded-t-[40px] p-[24px] ">
      <div className="absolute border-[2px] border-[black] px-[18px] -rotate-90 -left-[2.3rem] top-[3rem] bg-[white] rounded-[10px]">
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
      <div className="h-[3px] bg-[white] ml-auto w-[90%]"></div>

      {/* Sleeper bed section */}
      <div className="flex justify-between mt-auto">
        {sleeperSeatData.map((data, index) => (
          <div
            key={index}
            onClick={() => {
              if (user != "driver") {
                handleClick(index);
              }
            }}
            className={`flex relative w-[103px] h-[168px] border-[3px] rounded-[10px] cursor-pointer 
              ${
                data.booked
                  ? "border-[#FF0000] cursor-not-allowed"
                  : data.isSelected
                  ? "border-[yellow]"
                  : "border-[white]"
              }`}
          >
            <label className="text-[30px] text-[white] font-bold mx-auto absolute left-[2rem] top-[3rem]">
              {data.seatName}
            </label>

            <div
              className={`h-[15px] w-[85%] rounded-[50px] mt-auto mx-auto mb-[8px] 
                ${
                  data.booked
                    ? "bg-[#FF0000]"
                    : data.isSelected
                    ? "bg-[#E5FF00]"
                    : "bg-[white]"
                }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SleepBusLayout;
