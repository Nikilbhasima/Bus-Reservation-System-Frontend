import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBusByRoute = createAsyncThunk(
  "userBus/getBusByRoute",
  async ({ routeData, date }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/bus/getBusesByRoute/${date}`,
        {
          params: routeData,
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

export const getBusDetailById = createAsyncThunk(
  "userBus/getBusDetailById",
  async ({ busId, travelDate }, { rejectWithValue }) => {
    try {
      // const token = localStorage.getItem("JWT_TOKEN");

      const response = await axios.get(
        `http://localhost:8080/api/bus/getBusById/${busId}/${travelDate}`
      );
      return response.data;
    } catch (error) {}
    const errorMessage = error.response?.data?.message || error.message;
    const errorStatus = error.response?.status;
    return rejectWithValue({
      message: errorMessage,
      status: errorStatus,
    });
  }
);
