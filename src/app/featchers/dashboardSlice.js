import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalInfo: {
    TotalStudent: 9600,
    TotalTeacher: 10,
    TotalCourses: 20,
    TotalPendingFees: 36054,
  },
  UnpaidStudentData: [
    {
      profileImg:
        "https://images.pexels.com/photos/4786135/pexels-photo-4786135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Jordan",
      id: 524687465555454,
      course: "O level",
      rank: "first",
      status: true,
      pendingfees: 1200,
    },
    {
      profileImg:
        "https://images.pexels.com/photos/8005446/pexels-photo-8005446.jpeg?auto=compress&cs=tinysrgb&w=400",
      name: "Shadhna",
      id: 46546876896456,
      course: "O level",
      rank: "first",
      status: true,
      pendingfees: 1200,
    },
    {
      profileImg:
        "https://images.pexels.com/photos/9829307/pexels-photo-9829307.jpeg?auto=compress&cs=tinysrgb&w=400",
      name: "Pranshi",
      id: 78965463496876,
      course: "O level",
      rank: "first",
      status: false,
      pendingfees: 1200,
    },
    {
      profileImg:
        "https://images.pexels.com/photos/4786135/pexels-photo-4786135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Jordan",
      id: 7896545465496,
      course: "O level",
      rank: "first",
      status: true,
      pendingfees: 1200,
    },
    {
      profileImg:
        "https://images.pexels.com/photos/8005446/pexels-photo-8005446.jpeg?auto=compress&cs=tinysrgb&w=400",
      name: "Shadhna",
      id: 4655463545463,
      course: "O level",
      rank: "first",
      status: true,
      pendingfees: 1200,
    },
    {
      profileImg:
        "https://images.pexels.com/photos/9829307/pexels-photo-9829307.jpeg?auto=compress&cs=tinysrgb&w=400",
      name: "Pranshi",
      id: 456456456786978,
      course: "O level",
      rank: "first",
      status: true,
      pendingfees: 1200,
    },
    {
      profileImg:
        "https://images.pexels.com/photos/4786135/pexels-photo-4786135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Jordan",
      id: 798132134568,
      course: "O level",
      rank: "first",
      status: true,
      pendingfees: 1200,
    },
    {
      profileImg:
        "https://images.pexels.com/photos/8005446/pexels-photo-8005446.jpeg?auto=compress&cs=tinysrgb&w=400",
      name: "Shadhna",
      id: 789621789678,
      course: "O level",
      rank: "first",
      status: true,
      pendingfees: 1200,
    },
    {
      profileImg:
        "https://images.pexels.com/photos/9829307/pexels-photo-9829307.jpeg?auto=compress&cs=tinysrgb&w=400",
      name: "Pranshi",
      id: 52468755454,
      course: "O level",
      rank: "first",
      status: true,
      pendingfees: 1200,
    },
  ],
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
