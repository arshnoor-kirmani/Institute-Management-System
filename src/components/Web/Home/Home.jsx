import React from "react";
import { useSelector } from "react-redux";
import HeroSection from "./Components/HeroSection";
import HomeSecondSection from "./Components/HomeSecondSection";
import CourseSection from "./Components/CourseSection";
import LifeCardSection from "./Components/LifeCardSection";
import TraningValue_placementsSection from "./Components/traningValueplacementsSection";
import GetTouch from "./Components/GetTouch";
import CertificateSection from "./Components/CertificateSection.jsx";

export default function Home() {
  const ImageUrls = useSelector((state) => state.home.ImageUrls);
  const studentImage = useSelector((state) => state.home.studentImage);
  const Courses = useSelector((state) => state.home.Courses);
  const LifeCard = useSelector((state) => state.home.LifeCard);
  const traningValue = useSelector((state) => state.home.traningValue);
  const placements = useSelector((state) => state.home.placements);
  return (
    <main className="w-full min-h-80 grid box-border px-2 gap-5 ">
      <HeroSection images={ImageUrls} />
      <HomeSecondSection studentImage={studentImage} />
      <CourseSection courses={Courses} />
      {/* <LifeCardSection cards={LifeCard} /> */}
      <TraningValue_placementsSection
        tranings={traningValue}
        placements={placements}
      />
      <GetTouch />
      <CertificateSection />
    </main>
  );
}
