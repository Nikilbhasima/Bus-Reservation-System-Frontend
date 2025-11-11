import React from "react";
import { Outlet } from "react-router-dom";

function Booking() {
  return (
    <div className="py-[80px] px-[60px] grid">
      <Outlet />
    </div>
  );
}

export default Booking;
