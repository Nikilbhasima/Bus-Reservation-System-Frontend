import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice/AuthSlice";
import scheduleReducer from "./agencySlice/scheduleSlice/ScheduleSlice";
export default configureStore({
  reducer: { auth: authReducer, schedule: scheduleReducer },
});
