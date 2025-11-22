import { createSlice } from "@reduxjs/toolkit";
import { initiatePayment, verifyPayment } from "./PaymentThunks";

const initialState = {
  payment: null,
  loading: false,
  error: null,
  success: false,
};

export const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initiatePayment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(initiatePayment.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.payment = action?.payload;
      })
      .addCase(initiatePayment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "failed to initialize payment";
      })
      .addCase(verifyPayment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyPayment.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.payment = action?.payload;
      })
      .addCase(verifyPayment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "failed to verify payment";
      });
  },
});

export default paymentSlice.reducer;
