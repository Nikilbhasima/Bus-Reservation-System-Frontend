import { createSlice } from "@reduxjs/toolkit";
import { getAgencyDetail, updateAgencyDetail } from "./AgencyDetailThunks";

const initialState = {
  agencyDetail: null,
  loading: false,
  error: null,
  success: false,
};

const agencyDetailSlice = createSlice({
  name: "agencyDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAgencyDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAgencyDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.agencyDetail = action.payload;
      })
      .addCase(getAgencyDetail.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload?.message || "Failed to fetch agency detail";
      })
      .addCase(updateAgencyDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateAgencyDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.agencyDetail = action.payload;
      })
      .addCase(updateAgencyDetail.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload?.message || "Failed to update agency detail";
      });
  },
});

export default agencyDetailSlice.reducer;
