import React from "react";
import { Route, Routes } from "react-router-dom";
import RootRoutes from "./routes/RootRoutes";
import Dashboard from "./dashboard/Dashboard";
import Booking from "./booking/Booking";
import BusDetail from "./busDetail/BusDetail";
import DriverDetail from "./driverDetail/DriverDetail";
import BusDetail2 from "./busDetail/BusDetail2";
import BusDetailForm from "./busDetail/BusDetailForm";
import BusProfile from "./busDetail/BusProfile";

function AdminRoute() {
  return (
    <div className="flex-grow bg-[#ABABAB] p-[8px] sm:p-[16px] md:p-[24px] m-[16px] sm:mx-[24px] md:mx-[32px] rounded-[10px] overflow-y-auto">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/busDetail" element={<BusDetail />}>
          <Route index element={<BusDetail2 />} />
          <Route path="busDetail2" element={<BusDetail2 />} />
          <Route path="busProfile" element={<BusProfile />} />
          <Route path="busDetailForm" element={<BusDetailForm />} />
        </Route>
        <Route path="/driverDetail" element={<DriverDetail />} />
        <Route path="/routes" element={<RootRoutes />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default AdminRoute;
