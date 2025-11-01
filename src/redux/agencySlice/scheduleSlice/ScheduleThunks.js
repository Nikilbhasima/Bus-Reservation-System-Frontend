import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addSchedule = createAsyncThunk(
  "schedule/addSchedule",
  async (scheduleData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("JWT_TOKEN");

      const response = await axios.post(
        "http://localhost:8080/api/busSchedule/addBusSchedule",
        scheduleData,
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

export const getAllTravelAgencySchedule = createAsyncThunk(
  "schedule.getAllTravelAgencySchedule",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("JWT_TOKEN");
      const response = await axios.get(
        "http://localhost:8080/api/busSchedule/getBusSchedulesByTravelAgency",
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
