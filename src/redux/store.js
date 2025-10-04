import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice/AuthSlice";
export default configureStore({
  reducer: { auth: authReducer },
});
