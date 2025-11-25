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
      const response = await axios.get(
        `http://localhost:8080/api/busBooking/getAllBookingsByBusIdAndDate/${busId}/${tripDate}`
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

export const getBookingByDriverIdAndDate = createAsyncThunk(
  "booking/getBookingByDriverIdAndDate",
  async (date, { rejectWithValue }) => {
    console.log("in thunks data:", date);
    try {
      const token = localStorage.getItem("JWT_TOKEN");
      const response = await axios.get(
        `http://localhost:8080/api/employee/getListofBookingsByDateAndDriver/${date}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("thunks response", response.date);
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

export const getBookingsForAgency = createAsyncThunk(
  "booking/getBookingsForAgency",
  async ({ bookingDate, busId }) => {
    console.log("booking date:", bookingDate);
    console.log("bus id:", busId);
    try {
      const token = localStorage.getItem("JWT_TOKEN");
      const response = await axios.get(
        "http://localhost:8080/api/busBooking/getBookingsForAgency",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            bookingDate: bookingDate,
            busId: busId,
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
