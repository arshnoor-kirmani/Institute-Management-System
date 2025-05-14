import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ImageUrls: [
    ["heroImg/b1.jpg", "FirstImage"],
    ["heroImg/b2.jpg", "SecondImage"],
    ["heroImg/b3.jpg", "ThirdImage"],
    ["heroImg/b6.jpg", "FourthImage"],
    ["heroImg/b7.jpg", "FifthImage"],
    ["heroImg/b8.jpg", "SixthImage"],
  ],
  studentImage: "heroImg/student1.jpg",
  Courses: [
    {
      title: "Agricuture",
      subtitle: "Agricuture",
      buttontext: "Apply now",
      CourseNames: [
        "Crop Science",
        "Soil Management",
        "Agricultural Economics",
      ],
      icon: `<Grains size={50} weight="fill" />`,
    },
    {
      title: "Library Science",
      subtitle: "Agricuture",
      buttontext: "Apply now",
      CourseNames: [
        "Crop Science",
        "Soil Management",
        "Agricultural Economics",
      ],
      icon: `<Grains size={50} weight="fill" />`,
    },
    {
      title: "Naturopathy & Yoga Science",
      subtitle: "Agricuture",
      buttontext: "Apply now",
      CourseNames: [
        "Crop Science",
        "Soil Management",
        "Agricultural Economics",
      ],
      icon: `<Grains size={50} weight="fill" />`,
    },
    {
      title: "Fire & Safty",
      subtitle: "Agricuture",
      buttontext: "Apply now",
      CourseNames: [
        "Crop Science",
        "Soil Management",
        "Agricultural Economics",
      ],
      icon: `<Grains size={50} weight="fill" />`,
    },
    {
      title: "Computer Science",
      subtitle: "Agricuture",
      buttontext: "Apply now",
      CourseNames: [
        "Crop Science",
        "Soil Management",
        "Agricultural Economics",
      ],
      icon: `<Grains size={50} weight="fill" />`,
    },
    {
      title: "Commerse",
      subtitle: "Agricuture",
      buttontext: "Apply now",
      CourseNames: [
        "Crop Science",
        "Soil Management",
        "Agricultural Economics",
      ],
      icon: `<Grains size={50} weight="fill" />`,
    },
  ],
  LifeCard: [
    { title: "Libaray", src: "life/life1.jpg" },
    { title: "Instite Life", src: "life/life2.jpg" },
    { title: "Residence Facialty", src: "life/life3.jpg" },
    { title: "Intarnatinal Student", src: "life/life4.jpg" },
    { title: "Sport", src: "life/life5.jpg" },
    { title: "Lap", src: "life/life6.jpg" },
  ],
  traningValue: [
    { title: "C++", imgUrl: "icons/cplus.png" },
    { title: "Python", imgUrl: "icons/python.png" },
    { title: "Javascript", imgUrl: "icons/javascript.png" },
    { title: "C++", imgUrl: "icons/cplus.png" },
    { title: "Python", imgUrl: "icons/python.png" },
    { title: "Javascript", imgUrl: "icons/javascript.png" },
    { title: "C++", imgUrl: "icons/cplus.png" },
    { title: "Python", imgUrl: "icons/python.png" },
    { title: "Javascript", imgUrl: "icons/javascript.png" },
    { title: "Pin Clik", imgUrl: "icons/cplus.png" },
  ],
  placements: [
    { title: "Pin Clik", imgUrl: "icons/cplus.png" },
    { title: "Justdail", imgUrl: "icons/javascript.png" },
    { title: "E time", imgUrl: "icons/python.png" },
    { title: "Pin Clik", imgUrl: "icons/cplus.png" },
    { title: "Justdail", imgUrl: "icons/javascript.png" },
    { title: "E time", imgUrl: "icons/python.png" },
    { title: "Pin Clik", imgUrl: "icons/cplus.png" },
    { title: "Justdail", imgUrl: "icons/javascript.png" },
    { title: "E time", imgUrl: "icons/python.png" },
    { title: "Pin Clik", imgUrl: "icons/cplus.png" },
  ],
};
const HomeSlice = createSlice({
  name: "home",
  initialState,
});
// export const {  } = HomeSlice.actions;
export default HomeSlice.reducer;
