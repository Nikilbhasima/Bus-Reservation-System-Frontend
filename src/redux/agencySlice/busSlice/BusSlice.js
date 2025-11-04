import { createSlice } from "@reduxjs/toolkit";
import { addBus, getAllBus, getBusById, updateBusDetail } from "./busThunks";

const initialState = {
  bus: null,
  loading: false,
  error: null,
  success: false,
};

const busSlice = createSlice({
  name: "bus",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addBus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addBus.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.bus = action.payload;
      })
      .addCase(addBus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to Add the Bus";
      })
      .addCase(getAllBus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllBus.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.bus = action.payload;
      })
      .addCase(getAllBus.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload?.message || "Failed to Get All Bus Details";
      })
      .addCase(getBusById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBusById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.bus = action.payload;
      })
      .addCase(getBusById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to Get Bus Details";
      })
      .addCase(updateBusDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateBusDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.bus = action.payload;
      })
      .addCase(updateBusDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to Update Bus Details";
      });
  },
});

export default busSlice.reducer;
