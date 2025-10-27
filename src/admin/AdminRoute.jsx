import React from "react";
import { Route, Routes } from "react-router-dom";
import RootRoutes from "./routes/RootRoutes";
import Dashboard from "./dashboard/Dashboard";
import Booking from "./booking/Booking";
import BusDetail from "./busDetail/BusDetail";
import DriverDetail from "./driverDetail/DriverDetail";

function AdminRoute() {
  return (
    <div className="flex-grow bg-[#ABABAB] p-[8px] sm:p-[16px] md:p-[24px] m-[16px] sm:m-x-[24px] md:m-x-[32px] rounded-[10px] overflow-y-auto">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/busDetail" element={<BusDetail />} />
        <Route path="/driverDetail" element={<DriverDetail />} />
        <Route path="/routes" element={<RootRoutes />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default AdminRoute;
