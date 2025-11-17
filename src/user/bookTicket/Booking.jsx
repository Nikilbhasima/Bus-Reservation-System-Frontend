import React from "react";
import { Outlet } from "react-router-dom";

function Booking() {
  return (
    <div className=" grid">
      <Outlet />
    </div>
  );
}

export default Booking;
