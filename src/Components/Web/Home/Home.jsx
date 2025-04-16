import React, { useState } from "react";
import HeroSection from "./Components/HeroSection";
import CourseCategorySection from "./Components/CourseCategorySection";

export default function Home() {
  const [ImageUrls, setImageUrls] = useState([
    [
      "https://cdn.pixabay.com/photo/2025/04/13/15/48/sunrise-9531930_1280.jpg",
      "FirstImage",
    ],
    [
      "https://cdn.pixabay.com/photo/2019/06/21/19/27/switzerland-4290226_640.jpg",
      "SecondImage",
    ],
    [
      "https://cdn.pixabay.com/photo/2022/10/16/13/53/early-morning-7525151_640.jpg",
      "ThirdImage",
    ],
    [
      "https://cdn.pixabay.com/photo/2021/07/21/15/17/fog-6483278_640.jpg",
      "FourthImage",
    ],
    [
      "https://cdn.pixabay.com/photo/2021/01/21/14/10/egret-5937499_640.jpg",
      "FifthImage",
    ],
    [
      "https://cdn.pixabay.com/photo/2022/07/26/02/06/tea-plantation-7344887_640.jpg",
      "SixthImage",
    ],
  ]);
  return (
    <main className="w-full min-h-80 grid box-border px-2">
      <HeroSection images={ImageUrls} />
      <CourseCategorySection />
    </main>
  );
}
