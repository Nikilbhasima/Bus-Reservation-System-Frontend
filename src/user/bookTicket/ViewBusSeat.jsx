import React from "react";
import BusLayout from "./BusLayout";
import SleepBusLayout from "./SleepBusLayout";
import BusDetail from "./BusDetail";

function ViewBusSeat() {
  return (
    <div className="grid grid-cols-[35%_65%] gap-[32px]">
      {/* bus detail */}
      <BusDetail />
      {/* bus layout */}
      <div className="flex gap-[28px] justify-center">
        <BusLayout />
        <SleepBusLayout />
      </div>
    </div>
  );
}

export default ViewBusSeat;
