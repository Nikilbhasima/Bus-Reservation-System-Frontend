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
import DriverDetail2 from "./driverDetail/DriverDetail2";
import DriverForm from "./driverDetail/DriverForm";
import DriverProfile from "./driverDetail/DriverProfile";
import RouteDetail from "./routes/RouteDetail";
import RouteForm from "./routes/RouteForm";
import RouteFullDetail from "./routes/RouteFullDetail";
import BusSchedule from "./busSchedule/BusSchedule";
import AgencyDetail from "./agecyDetail/AgencyDetail";
import AgencyForm from "./agecyDetail/AgencyForm";
import AgencyDetail2 from "./agecyDetail/AgencyDetail2";

function AdminRoute() {
  return (
    <div className="flex-grow p-[8px] sm:p-[16px] md:p-[24px] m-[16px] sm:mx-[24px] md:mx-[32px] rounded-[10px] overflow-y-auto">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/busDetail" element={<BusDetail />}>
          <Route index element={<BusDetail2 />} />
          <Route path="busDetail2" element={<BusDetail2 />} />
          <Route path="busProfile" element={<BusProfile />} />
          <Route
            path="busDetailForm/:actionType/:id"
            element={<BusDetailForm />}
          />
        </Route>
        <Route path="/driverDetail" element={<DriverDetail />}>
          <Route index element={<DriverDetail2 />} />
          <Route path="driverDetail2" element={<DriverDetail2 />} />
          <Route path="driverForm/:actionType/:id" element={<DriverForm />} />
          <Route path="driverProfile/:id" element={<DriverProfile />} />
        </Route>
        <Route path="/routes" element={<RootRoutes />}>
          <Route index element={<RouteDetail />} />
          <Route path="routeDetial" element={<RouteDetail />} />
          <Route path="routeForm/:actionType/:id" element={<RouteForm />} />
          <Route path="routeFullDetal/:id" element={<RouteFullDetail />} />
          <Route />
          <Route />
        </Route>
        <Route path="busSchedule" element={<BusSchedule />} />
        <Route path="agencyDetail" element={<AgencyDetail />}>
          <Route index element={<AgencyDetail2 />} />
          <Route path="agencyForm/:id" element={<AgencyForm />} />
          <Route path="agencyDetail2" element={<AgencyDetail2 />} />
        </Route>
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default AdminRoute;
