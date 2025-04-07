import { configureStore } from "@reduxjs/toolkit";
import dashboardSlice from "./featchers/dashboardSlice";
import React from "react";

export const store = configureStore({
  reducer: {
    dashboardSlice,
  },
});
