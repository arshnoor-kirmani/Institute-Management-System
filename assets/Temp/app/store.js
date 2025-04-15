import { configureStore } from "@reduxjs/toolkit";
import { dashboardSlice } from "./index";
import React from "react";

export const store = configureStore({
  reducer: {
    dashboardSlice,
  },
});
