import { createSlice } from "@reduxjs/toolkit";

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
      console.log("i was called");
      state.jwt = localStorage.getItem("JWT_TOKEN");
      state.success = true;
    },
    setJwt: (state) => {
      state.jwt = localStorage.getItem("JWT_TOKEN");
    },
  },
});

export const { setJwt, setLoginSuccess } = authSlice.actions;
export default authSlice.reducer;
