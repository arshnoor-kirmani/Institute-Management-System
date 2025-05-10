import React, { useState } from "react";
import HeroSection from "./Components/HeroSection";
import HomeSecondSection from "./Components/HomeSecondSection";
import CourseCategorySection from "./Components/CourseCategorySection";
import HomeFourthSection from "./Components/HomeFourthSection";
import HomeFiveSection from "./Components/HomeFiveSection";
import { Grains } from "@phosphor-icons/react";
// Arshnoor
export default function Home() {
  const [ImageUrls, setImageUrls] = useState([
    ["heroImg/b1.jpg", "FirstImage"],
    ["heroImg/b2.jpg", "SecondImage"],
    ["heroImg/b3.jpg", "ThirdImage"],
    ["heroImg/b6.jpg", "FourthImage"],
    ["heroImg/b7.jpg", "FifthImage"],
    ["heroImg/b8.jpg", "SixthImage"],
  ]);
  const [Courses, setCourses] = useState([
    {
      title: "Agricuture",
      subtitle: "Agricuture",
      buttontext: "Apply now",
      CourseNames: [
        "Crop Science",
        "Soil Management",
        "Agricultural Economics",
      ],
      icon: <Grains size={50} weight="fill" />,
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
      icon: <Grains size={50} weight="fill" />,
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
      icon: <Grains size={50} weight="fill" />,
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
      icon: <Grains size={50} weight="fill" />,
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
      icon: <Grains size={50} weight="fill" />,
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
      icon: <Grains size={50} weight="fill" />,
    },
  ]);
  const [LifeCard, setLifeCard] = useState([
    { title: "Libaray", src: "life/life1.jpg" },
    { title: "Instite Life", src: "life/life2.jpg" },
    { title: "Residence Facialty", src: "life/life3.jpg" },
    { title: "Intarnatinal Student", src: "life/life4.jpg" },
    { title: "Sport", src: "life/life5.jpg" },
    { title: "Lap", src: "life/life6.jpg" },
  ]);
  const [traningValue, setTraningValue] = useState([
    { title: "C++", img: "icons/cplus.png" },
    { title: "Python", img: "icons/python.png" },
    { title: "Javascript", img: "icons/javascript.png" },
  ]);
  const [placements, setPlacements] = useState([
    { title: "Pin Clik", img: "icons/cplus.png" },
    { title: "Justdail", img: "icons/javascript.png" },
    { title: "E time", img: "icons/python.png" },
  ]);
  return (
    <main className="w-full min-h-80 grid box-border px-2">
      <HeroSection images={ImageUrls} />
      <HomeSecondSection />
      <CourseCategorySection courses={Courses} />
      {/* <HomeFourthSection cards={LifeCard} /> */}
      {/* <HomeFiveSection tranings={traningValue} placements={placements} /> */}
    </main>
  );
}
