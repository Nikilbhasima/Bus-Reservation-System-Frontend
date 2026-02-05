import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const sendMessage = createAsyncThunk(
  "contactUs/sendMessage",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/auth/user/query/add`,
        userData,
      );
      return response.data;
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message;
      const errorStatus = err.response?.status;
      return rejectWithValue({
        message: errorMessage,
        status: errorStatus,
      });
    }
  },
);

export const getAllMessage = createAsyncThunk(
  "contactUs/getAllMessage",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/auth/admin/query/all`,
      );
      return response.data;
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message;
      const errorStatus = err.response?.status;
      return rejectWithValue({
        message: errorMessage,
        status: errorStatus,
      });
    }
  },
);

export const updateStatus = createAsyncThunk(
  "contactUs/updateStatus",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/auth/admin/query/updateStatus/${id}`,
      );
      return response.data;
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message;
      const errorStatus = err.response?.status;
      return rejectWithValue({
        message: errorMessage,
        status: errorStatus,
      });
    }
  },
);
