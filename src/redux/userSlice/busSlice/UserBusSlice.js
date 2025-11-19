import { createSlice } from "@reduxjs/toolkit";
import { getBusByRoute, getBusDetailById } from "./BusThunks";

const initialState = {
  bus: null,
  loading: false,
  error: null,
  success: false,
};

const userBusSlice = createSlice({
  name: "userBus",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBusByRoute.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBusByRoute.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.bus = action?.payload;
      })
      .addCase(getBusByRoute.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload?.message || "failed to fetch all bus by route";
      })
      .addCase(getBusDetailById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBusDetailById.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.bus = action?.payload;
      })
      .addCase(getBusDetailById.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload?.message || "failed to fetch bus detail by id";
      });
  },
});

export default userBusSlice.reducer;
