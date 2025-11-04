import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice/AuthSlice";
import scheduleReducer from "./agencySlice/scheduleSlice/ScheduleSlice";
import driverReducer from "./agencySlice/driverSlice/DriverSlice";
import busReducer from "./agencySlice/busSlice/BusSlice";
import agencyDetailReducer from "./agencySlice/agencyDetailSlice/AgencyDetailSlice";
export default configureStore({
  reducer: {
    auth: authReducer,
    schedule: scheduleReducer,
    driver: driverReducer,
    bus: busReducer,
    agency: agencyDetailReducer,
  },
});
