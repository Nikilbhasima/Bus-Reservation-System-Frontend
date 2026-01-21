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
        },
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
  },
);

export const updateAgencyDetail = createAsyncThunk(
  "agencyDetail/updateAgencyDetail",
  async (agencyUpdateData, { rejectWithValue }) => {
    console.log("agency detail:", agencyUpdateData);
    try {
      const token = localStorage.getItem("JWT_TOKEN");
      const response = await axios.post(
        `http://localhost:8080/api/travelAgency/editTravelAgencyDetials/${agencyUpdateData?.travel_agency_id}`,
        agencyUpdateData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
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
  },
);

export const getDashBoardData = createAsyncThunk(
  "agencyDetail/getDashBoardData",
  async (date, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("JWT_TOKEN");
      const response = await axios.get(
        "http://localhost:8080/api/travelAgency/getData",
        {
          params: { date },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
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
  },
);

export const addTravelAgency = createAsyncThunk(
  "agencyDetail/addTravelAgency",
  async ({ userId, data }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("JWT_TOKEN");
      const response = await axios.post(
        `http://localhost:8080/api/travelAgency/addTravelAgencyDetails/${userId}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
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
  },
);

export const updateTravelAgency = createAsyncThunk(
  "agencyDetail/updateTravelAgency",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      console.log("thunks data:", data);
      const token = localStorage.getItem("JWT_TOKEN");
      const response = await axios.put(
        `http://localhost:8080/api/travelAgency/update/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
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
  },
);

export const getTravelAgencyDetails = createAsyncThunk(
  "agencyDetail/getTravelAgencyDetails",
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("JWT_TOKEN");
      const response = await axios.get(
        `http://localhost:8080/api/travelAgency/getAgency/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
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
  },
);

export const getSuperAdminDashboardData = createAsyncThunk(
  "agencyDetail/getSuperAdminDashboardData",
  async (date, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("JWT_TOKEN");
      const response = await axios.get(
        "http://localhost:8080/api/travelAgency/getSuperAdminDashboardData",
        {
          params: { date },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
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
  },
);
