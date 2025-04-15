import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  courses: [],
};

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    getCourse: (state, action) => {
      state.courses = action.payload.courses;
    },
  },
});

export default courseSlice;
