import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAgencyDetail = createAsyncThunk(
  "agencyDetail/getAgencyDetail",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("JWT_TOKEN");
      const response = await axios.get(
        "http://localhost:8080/api/travelAgency/getTravelAgencyDetails",
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

export const updateAgencyDetail = createAsyncThunk(
  "agencyDetail/updateAgencyDetail",
  async (agencyUpdateData, { rejectWithValue }) => {
    console.log("from thunks part", agencyUpdateData);
    try {
      const token = localStorage.getItem("JWT_TOKEN");
      const response = await axios.post(
        "http://localhost:8080/api/travelAgency/editTravelAgencyDetials",
        agencyUpdateData,
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
