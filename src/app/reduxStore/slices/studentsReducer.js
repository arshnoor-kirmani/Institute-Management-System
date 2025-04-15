import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  students: [],
  loading: false,
  error: null,
};
const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    fetchStudents(state, action) {
      state.loading = false;
      state.students = action.payload;
    },
  },
});
export default studentSlice;
