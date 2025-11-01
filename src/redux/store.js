import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice/AuthSlice";
import scheduleReducer from "./agencySlice/scheduleSlice/ScheduleSlice";
import driverReducer from "./agencySlice/driverSlice/DriverSlice";
export default configureStore({
  reducer: {
    auth: authReducer,
    schedule: scheduleReducer,
    driver: driverReducer,
  },
});
