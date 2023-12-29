import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authenticationSlice";

export default configureStore({
  reducer: {
    authentication: authReducer,
  },
});
