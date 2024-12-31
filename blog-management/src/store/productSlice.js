import { createSlice } from "@reduxjs/toolkit";

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
