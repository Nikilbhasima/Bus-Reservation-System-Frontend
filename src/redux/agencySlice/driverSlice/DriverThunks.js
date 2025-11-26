import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const addDriver = createAsyncThunk(
  "driver/addDriver",
  async (driverData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("JWT_TOKEN");
      const response = await axios.post(
        "http://localhost:8080/api/employee/addEmployee",
        driverData,
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

export const getTravelAgencyDriver = createAsyncThunk(
  "driver/getTravelAgencyDriver",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("JWT_TOKEN");
      const response = await axios.get(
        "http://localhost:8080/api/employee/getEmployeeByTravelAgency",
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

export const updateDriverDetail = createAsyncThunk(
  "driver/updateDriverDetail",
  async ({ id, driverData }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("JWT_TOKEN");
      const response = await axios.post(
        `http://localhost:8080/api/employee/editEmployee/${id}`,
        driverData,
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

export const getDriverById = createAsyncThunk(
  "driver/getDriverById",
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("JWT_TOKEN");

      const response = await axios.get(
        `http://localhost:8080/api/employee/getEmployeeById/${id}`,
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

export const getBusDriver = createAsyncThunk(
  "driver/getBusDriver",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("JWT_TOKEN");

      const response = await axios.get(
        `http://localhost:8080/api/employee/getEmployeeData`,
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

export const unassignBus = createAsyncThunk(
  "driver/unassignBus",
  async (driverId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("JWT_TOKEN");

      const response = await axios.put(
        `http://localhost:8080/api/employee/unAssignEmployeeBus/${driverId}`,
        {},
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

export const assignBus = createAsyncThunk(
  "driver/assignBus",
  async ({ driverId, busId }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("JWT_TOKEN");

      const response = await axios.put(
        "http://localhost:8080/api/employee/assignDriverBus",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: { busId: busId, driverId: driverId },
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

export const sendPushNotification = createAsyncThunk(
  "driver/sendPushNotification",
  async ({ busId, today, notificationData }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("JWT_TOKEN");

      const response = await axios.post(
        `http://localhost:8080/api/employee/sendPassengerNotification/${busId}/${today}`,
        notificationData,
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
