import { createSlice } from "@reduxjs/toolkit";
import {
  registerUser,
  loginUser,
  getUserDetail,
  updateUserDetail,
} from "./AuthThunks";

const initialState = {
  user: null,
  jwt: null,
  loading: false,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoginSuccess: (state) => {
      state.jwt = localStorage.getItem("JWT_TOKEN");
      state.success = true;
    },
    setJwt: (state) => {
      state.jwt = localStorage.getItem("JWT_TOKEN");
    },
    logout: (state) => {
      state.user = null;
      state.jwt = null;
      state.error = null;
      state.success = false;
      state.user = null;
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action?.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "registration failed";
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.jwt = action?.token?.payload?.token;
        state.user = action?.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Login failed";
      })
      .addCase(getUserDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserDetail.fulfilled, (state, action) => {
        console.log("token:", action);
        state.loading = false;
        state.success = true;
        state.error = null;
        state.jwt = action?.token?.payload?.token;
        state.user = action?.payload;
      })
      .addCase(getUserDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Login failed";
      })
      .addCase(updateUserDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.jwt = action?.token?.payload?.token;
        state.user = action?.payload;
      })
      .addCase(updateUserDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Login failed";
      });
  },
});

export const { setJwt, setLoginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
