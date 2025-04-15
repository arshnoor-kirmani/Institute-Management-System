import { createSlice } from "@reduxjs/toolkit";
import STORAGE from "../../appwrite/Storage/Storage";

const initialState = [];

const pendingSlice = createSlice({
  name: "pendingStudents",
  initialState,
  reducers: {
    setPendingStudent: (state, action) => {
      state = action.payload;
    },
  },
});
export const { setPendingStudent } = pendingSlice.actions;
export default pendingSlice.reducer;
