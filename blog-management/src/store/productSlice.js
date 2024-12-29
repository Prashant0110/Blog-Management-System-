import { createSlice } from "@reduxjs/toolkit";
import { use } from "react";

createSlice({
  name: "product",
  initialState: {
    date: [],
    status: null,
  },

  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },

    setUser: (state, action) => {
      state.date = action.payload;
    },
  },
});
