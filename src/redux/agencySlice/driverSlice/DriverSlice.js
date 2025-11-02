import { createSlice } from "@reduxjs/toolkit";
import { addDriver, getDriverById, updateDriverDetail } from "./DriverThunks";
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
      });
  },
});

export default driverSlice.reducer;
