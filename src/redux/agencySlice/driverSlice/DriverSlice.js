import { createSlice } from "@reduxjs/toolkit";
import {
  addDriver,
  assignBus,
  getBusDriver,
  getDriverById,
  sendPushNotification,
  unassignBus,
  updateDriverDetail,
  updateUserBoard,
} from "./DriverThunks";
import { getAllTravelAgencySchedule } from "../scheduleSlice/ScheduleThunks";

const initialState = {
  driver: null,
  loading: false,
  error: null,
  success: false,
};

const driverSlice = createSlice({
  name: "driver",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addDriver.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addDriver.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.driver = action.payload;
      })
      .addCase(addDriver.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "fail to add bus driver";
      })
      .addCase(getAllTravelAgencySchedule.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllTravelAgencySchedule.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.driver = action.payload;
      })
      .addCase(getAllTravelAgencySchedule.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "fail to get all driver";
      })
      .addCase(updateDriverDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateDriverDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.driver = action.payload;
      })
      .addCase(updateDriverDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "fail to update driver";
      })
      .addCase(getDriverById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDriverById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.driver = action.payload;
      })
      .addCase(getDriverById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "fail to get driver";
      })
      .addCase(assignBus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(assignBus.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.driver = action.payload;
      })
      .addCase(assignBus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "fail to assign bus";
      })
      .addCase(unassignBus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(unassignBus.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.driver = action.payload;
      })
      .addCase(unassignBus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "fail to unassign bus";
      })
      .addCase(sendPushNotification.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendPushNotification.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.driver = action.payload;
      })
      .addCase(sendPushNotification.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "fail to unassign bus";
      })
      .addCase(getBusDriver.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBusDriver.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.driver = action.payload;
      })
      .addCase(getBusDriver.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "fail to unassign bus";
      })
      .addCase(updateUserBoard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserBoard.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.driver = action.payload;
      })
      .addCase(updateUserBoard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "fail to update user onboard";
      });
  },
});

export default driverSlice.reducer;
