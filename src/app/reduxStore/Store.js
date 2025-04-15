import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import pendingSlice from "./slices/pendingReducer.js";

const store = configureStore({
  reducer: {
    pending_student: pendingSlice,
  },
});

export default store;
