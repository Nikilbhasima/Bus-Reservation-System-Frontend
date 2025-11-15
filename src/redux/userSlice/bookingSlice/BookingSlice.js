import { createSlice } from "@reduxjs/toolkit";
import { bookSeat, getBookingsByBusIdAndDate } from "./BookingThunks";

const initialState = {
  booking: null,
  loading: false,
  error: null,
  success: false,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(bookSeat.rejected, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(bookSeat.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.booking = action?.payload;
      })
      .addCase(bookSeat.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "failed to book seat";
      })
      .addCase(getBookingsByBusIdAndDate.rejected, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBookingsByBusIdAndDate.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.booking = action?.payload;
      })
      .addCase(getBookingsByBusIdAndDate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "failed to fetch all bookings";
      });
  },
});

export default bookingSlice.reducer;
