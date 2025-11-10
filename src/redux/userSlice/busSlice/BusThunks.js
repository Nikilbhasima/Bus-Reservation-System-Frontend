import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBusByRoute = createAsyncThunk(
  "userBus/getBusByRoute",
  async ({ routeData, date }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("JWT_TOKEN");

      const response = await axios.get(
        `http://localhost:8080/api/bus/getBusesByRoute/${date}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: routeData, // routeData will be sent as query parameters
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
