import { createSlice } from "@reduxjs/toolkit";
import { addSchedule, getAllTravelAgencySchedule } from "./ScheduleThunks";

const initialState = {
  schedule: null,
  loading: false,
  error: null,
  success: false,
};

const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addSchedule.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addSchedule.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.schedule = action.payload;
      })
      .addCase(addSchedule.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "fail to add bus schedule";
      })
      .addCase(getAllTravelAgencySchedule.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllTravelAgencySchedule.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.schedule = action.payload;
      })
      .addCase(getAllTravelAgencySchedule.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload?.message || "fail to get all travel agency detail";
      });
  },
});

export default scheduleSlice.reducer;
