import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalInfo: {
    TotalStudent: 9600,
    TotalTeacher: 10,
    TotalCourses: 20,
    TotalPendingFees: 36054,
  },
  UnpaidStudentData: [],
  LoginActivety: [
    {
      DeviceName: "Windows",
      LoginTime: "10:31 AM",
      LogoutTime: "10:49 AM",
      Date: "12/01/2025",
      Username: "Arshnoor",
      Status: false,
    },
    {
      DeviceName: "Windows",
      LoginTime: "09:26 AM",
      LogoutTime: "10:49 AM",
      Date: "13/01/2025",
      Username: "Sarfaraz",
      Status: true,
    },
    {
      DeviceName: "Windows",
      LoginTime: "10:11 PM",
      LogoutTime: "10:49 PM",
      Date: "14/01/2025",
      Username: "Human",
      Status: false,
    },
    {
      DeviceName: "Windows",
      LoginTime: "08:31 AM",
      LogoutTime: "08:49 AM",
      Date: "15/01/2025",
      Username: "Arshnoor",
      Status: true,
    },
  ],
};

const dashboardSlice = createSlice({
  name: "Dashboard",
  initialState,
  reducers: {
    addTotalInfo: (state, action) => {
      state.totalInfo = action.payload;
    },
    addUnpaidStudentData: (state, action) => {
      state.UnpaidStudentData = action.payload;
    },
  },
});

export const { addTotalInfo, addUnpaidStudentData } = dashboardSlice.actions;
export default dashboardSlice.reducer;
