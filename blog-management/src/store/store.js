import { configureStore } from "redux";
import authSlice from "./authSlice";

const store = configureStore({
  reduce: {
    // reducers
    auth: authSlice,
  },
});

export default store;
