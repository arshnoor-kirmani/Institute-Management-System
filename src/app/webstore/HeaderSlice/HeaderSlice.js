import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  NavBtnsValues: [
    [
      "About",
      "About AUI",
      "Our Inspiration",
      "Vice Chancellor's Message",
      "Registrar Massage",
      "COE Massage",
      "Vision & Mission",
      "University Act",
      "Recognition / Approvals",
      "Awards & Achievements",
    ],
    [
      "Programmes",
      "Faculty of Arts",
      "Faculty of Science",
      "Faculty of Commerce",
      "Faculty of Management",
      "Faculty of Law",
      "Faculty of Engineering & Technology",
      "Faculty of Pharmacy",
      "Faculty of Hotel Management & Catering Technology",
    ],
    ["Vocational"],
    [
      "Admission",
      "Admission Process",
      "Eligibility Criteria",
      "Scholarship",
      "Fee Structure",
    ],
    ["Research"],
    ["Placements"],
    ["Student Zone"],
    ["Life@Hope"],
    ["Admission 2025"],
    ["Blog"],
  ],
};
const HeaderSlice = createSlice({
  name: "header",
  initialState,
});
// export const {  } = HeaderSlice.actions;
export default HeaderSlice.reducer;
