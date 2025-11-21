import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice/AuthSlice";
import scheduleReducer from "./agencySlice/scheduleSlice/ScheduleSlice";
import driverReducer from "./agencySlice/driverSlice/DriverSlice";
import busReducer from "./agencySlice/busSlice/BusSlice";
import agencyDetailReducer from "./agencySlice/agencyDetailSlice/AgencyDetailSlice";
import routeReducer from "./agencySlice/routeSlice/RouteSlice";
import userBusReducer from "./userSlice/busSlice/UserBusSlice";
import contactMessageReducer from "./userSlice/contactSlice/ContactSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    schedule: scheduleReducer,
    driver: driverReducer,
    bus: busReducer,
    agency: agencyDetailReducer,
    routes: routeReducer,
    userBus: userBusReducer,
    contactUs: contactMessageReducer,
  },
});
