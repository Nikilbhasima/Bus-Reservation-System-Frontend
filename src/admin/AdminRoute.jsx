import React from "react";
import { Route, Routes } from "react-router-dom";
import RootRoutes from "./routes/RootRoutes";
import Dashboard from "./dashboard/Dashboard";
import Booking from "./booking/Booking";
import BusDetail from "./busDetail/BusDetail";
import DriverDetail from "./driverDetail/DriverDetail";

function AdminRoute() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/busDetail" element={<BusDetail />} />
      <Route path="/driverDetail" element={<DriverDetail />} />
      <Route path="/routes" element={<RootRoutes />} />
      <Route path="*" element={<Dashboard />} />
    </Routes>
  );
}

export default AdminRoute;
