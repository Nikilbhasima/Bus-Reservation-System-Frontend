import { createSlice } from "@reduxjs/toolkit";
import {
  boardingNotification,
  bookSeat,
  cancelBooking,
  getBookingByDriverIdAndDate,
  getBookingsByBusIdAndDate,
  getBookingsForAgency,
  getUserBooking,
  updateJourney,
} from "./BookingThunks";

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
      })
      .addCase(getUserBooking.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserBooking.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.booking = action?.payload;
      })
      .addCase(getUserBooking.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload?.message || "failed to fetch user bookings";
      })
      .addCase(getBookingByDriverIdAndDate.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBookingByDriverIdAndDate.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.booking = action?.payload;
      })
      .addCase(getBookingByDriverIdAndDate.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload?.message ||
          "failed to fetch user bookings by driver id and date";
      })
      .addCase(getBookingsForAgency.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBookingsForAgency.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.booking = action?.payload;
      })
      .addCase(getBookingsForAgency.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "failed to bookingsfor agency";
      })
      .addCase(cancelBooking.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(cancelBooking.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.booking = action?.payload;
      })
      .addCase(cancelBooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "failed to cancel booking";
      })
      .addCase(boardingNotification.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(boardingNotification.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.booking = action?.payload;
      })
      .addCase(boardingNotification.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload?.message || "failed to sending boarding notification";
      })
      .addCase(updateJourney.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateJourney.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.booking = action?.payload;
      })
      .addCase(updateJourney.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload?.message || "failed to update journey update status";
      });
  },
});

export default bookingSlice.reducer;
