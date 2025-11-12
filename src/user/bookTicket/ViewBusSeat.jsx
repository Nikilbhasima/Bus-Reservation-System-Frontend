import React, { useEffect, useState } from "react";
import BusLayout from "./BusLayout";
import SleepBusLayout from "./SleepBusLayout";
import BusDetail from "./BusDetail";

function ViewBusSeat() {
  const [selectSeat, setSelectSeat] = useState([]);

  return (
    <div className="grid grid-cols-[38%_63%] gap-[32px]">
      {/* bus detail */}
      <BusDetail seatName={selectSeat} />
      {/* bus layout */}
      <div className="flex gap-[28px] justify-center h-fit">
        <BusLayout seatName={selectSeat} setSeat={setSelectSeat} />
        <SleepBusLayout seatName={selectSeat} setSeat={setSelectSeat} />
      </div>
    </div>
  );
}

export default ViewBusSeat;
