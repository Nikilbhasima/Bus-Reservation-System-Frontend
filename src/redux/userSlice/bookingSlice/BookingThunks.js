import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const bookSeat = createAsyncThunk(
  "booking/bookSeat",
  async ({ bookingDetail, busId }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("JWT_TOKEN");
      const response = await axios.post(
        `http://localhost:8080/api/busBooking/bookSeats/${busId}`,
        bookingDetail,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      const errorStatus = error.response?.status;
      return rejectWithValue({
        message: errorMessage,
        status: errorStatus,
      });
    }
  }
);

export const getBookingsByBusIdAndDate = createAsyncThunk(
  "booking/getBookingsByBusIdAndDate",
  async ({ busId, tripDate }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("JWT_TOKEN");
      const response = await axios.get(
        `http://localhost:8080/api/busBooking/getAllBookingsByBusIdAndDate/${busId}/${tripDate}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      const errorStatus = error.response?.status;
      return rejectWithValue({
        message: errorMessage,
        status: errorStatus,
      });
    }
  }
);

export const getUserBooking = createAsyncThunk(
  "booking/getUserBooking",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("JWT_TOKEN");
      const response = await axios.get(
        "http://localhost:8080/api/busBooking/getUserBookings",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      const errorStatus = error.response?.status;
      return rejectWithValue({
        message: errorMessage,
        status: errorStatus,
      });
    }
  }
);
