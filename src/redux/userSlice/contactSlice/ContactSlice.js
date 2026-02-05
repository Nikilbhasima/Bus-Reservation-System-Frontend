import { createSlice } from "@reduxjs/toolkit";
import { getAllMessage, sendMessage, updateStatus } from "./ContactThunks";

const initialState = {
  user: null,
  loading: false,
  error: null,
  success: false,
};

const contactSlice = createSlice({
  name: "contactUs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.bus = action?.payload;
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to send Message";
      })
      .addCase(getAllMessage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllMessage.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.bus = action?.payload;
      })
      .addCase(getAllMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to fetch all user";
      })
      .addCase(updateStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.bus = action?.payload;
      })
      .addCase(updateStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to update contact";
      });
  },
});

export default contactSlice.reducer;
