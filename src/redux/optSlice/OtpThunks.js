import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const sendOtp = createAsyncThunk(
  "opt/sendOtp",
  async (email, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/otp/generateOtp",
        {
          params: { email },
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

export const validateOtp = createAsyncThunk(
  "otp/validateOtp",
  async ({ email, otp }) => {
    const otpString = Array.isArray(otp) ? otp.join("") : otp;
    try {
      const response = await axios.post(
        "http://localhost:8080/api/otp/validateOtp",
        {},
        {
          params: {
            email,
            otp: otpString,
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

export const updatePassword = createAsyncThunk(
  "opt/updatePassword",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/otp/updatePassword",
        data
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
