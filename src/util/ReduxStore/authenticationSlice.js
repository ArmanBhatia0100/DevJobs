import { createSlice } from "@reduxjs/toolkit";
import { redirect } from "react-router";

const authSlice = createSlice({
  name: "authentication",
  initialState: { isAuthenticated: false },
  reducers: {
    login: (state) => {
      window.localStorage.setItem("token", "true");
      return { ...state, isAuthenticated: true };
    },
    logout: (state) => {
      window.localStorage.removeItem("token");
      return { ...state, isAuthenticated: false };
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
