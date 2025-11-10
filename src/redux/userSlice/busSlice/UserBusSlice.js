import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bus: null,
  jwt: null,
  loading: false,
  error: null,
  success: false,
};

const userBusSlice = createSlice({
  name: "userBus",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});
