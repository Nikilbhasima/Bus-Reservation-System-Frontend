import React from "react";
import { Route, Routes } from "react-router-dom";
import RootRoutes from "./routes/RootRoutes";
import Dashboard from "./dashboard/Dashboard";
import Booking from "./booking/Booking";
import BusDetail from "./busDetail/BusDetail";
import DriverDetail from "./driverDetail/DriverDetail";
import DriverForm from "./driverDetail/DriverForm";
import DriverDetail2 from "./driverDetail/DriverDetail2";
import DriverProfile from "./driverDetail/DriverProfile";

function AdminRoute() {
  return (
    <div className="flex-grow p-[8px] sm:p-[16px] md:p-[24px] m-[16px] sm:m-x-[24px] md:m-x-[32px] rounded-[10px] overflow-y-auto">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/busDetail" element={<BusDetail />} />
        <Route path="/driverDetail" element={<DriverDetail />}>
          <Route index element={<DriverDetail2 />} />
          <Route
            path="/driverDetail/driverDetail2"
            element={<DriverDetail2 />}
          />
          <Route path="/driverDetail/driverForm" element={<DriverForm />} />
          <Route
            path="/driverDetail/driverProfile"
            element={<DriverProfile />}
          />
        </Route>
        <Route path="/routes" element={<RootRoutes />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default AdminRoute;
