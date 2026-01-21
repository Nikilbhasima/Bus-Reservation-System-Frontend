import { createSlice } from "@reduxjs/toolkit";
import {
  addTravelAgency,
  getAgencyDetail,
  getSuperAdminDashboardData,
  getTravelAgencyDetails,
  updateAgencyDetail,
  updateTravelAgency,
} from "./AgencyDetailThunks";

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
      })
      .addCase(addTravelAgency.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTravelAgency.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.agencyDetail = action.payload;
      })
      .addCase(addTravelAgency.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to add agency detail";
      })
      .addCase(updateTravelAgency.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTravelAgency.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.agencyDetail = action.payload;
      })
      .addCase(updateTravelAgency.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to add agency detail";
      })
      .addCase(getTravelAgencyDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTravelAgencyDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.agencyDetail = action.payload;
      })
      .addCase(getTravelAgencyDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to get agency detail";
      })
      .addCase(getSuperAdminDashboardData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSuperAdminDashboardData.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.agencyDetail = action.payload;
      })
      .addCase(getSuperAdminDashboardData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to get agency detail";
      });
  },
});

export default agencyDetailSlice.reducer;
