import { createSlice } from "@reduxjs/toolkit";
import { use } from "react";

createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    status: null,
  },

  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },

    setUser: (state, action) => {
      state.user = action.payload;
    },

    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});
