import { createSlice } from "@reduxjs/toolkit";
import { getBusByRoute } from "./BusThunks";

const initialState = {
  bus: null,
  jwt: null,
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
      });
  },
});

export default userBusSlice.reducer;
