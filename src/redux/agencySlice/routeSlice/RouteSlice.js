import { createSlice } from "@reduxjs/toolkit";
import {
  addRoute,
  getAllRoute,
  getRouteById,
  updateRoute,
} from "./RouteThunks";

const initialState = {
  route: null,
  loading: false,
  error: null,
  success: false,
};

const routeSlice = createSlice({
  name: "route",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addRoute.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addRoute.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.route = action.payload;
      })
      .addCase(addRoute.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "fail to add route ";
      })
      .addCase(updateRoute.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateRoute.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.route = action.payload;
      })
      .addCase(updateRoute.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "fail to update schedule";
      })
      .addCase(getAllRoute.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllRoute.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.route = action.payload;
      })
      .addCase(getAllRoute.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "fail to get all schedule";
      })
      .addCase(getRouteById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRouteById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.route = action.payload;
      })
      .addCase(getRouteById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "fail to get route by id";
      });
  },
});

export default routeSlice.reducer;
