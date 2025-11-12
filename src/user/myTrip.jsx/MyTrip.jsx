import React from "react";
import TicketCard from "./TicketCard";

function MyTrip() {
  return (
    <div className="p-[32px]">
      <h2 className="font-bold text-[24px]">My Trips</h2>

      <div className="p-[16px] w-full flex flex-col gap-[32px]">
        <TicketCard />

        <TicketCard />
      </div>
    </div>
  );
}

export default MyTrip;
