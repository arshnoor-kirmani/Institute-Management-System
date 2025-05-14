import React from "react";
import ButtonComp from "./ButtonComp";
import { nanoid } from "@reduxjs/toolkit";
import { Grains } from "@phosphor-icons/react";
export default function CourseCards({ courses }) {
  return (
    <div
      className={`w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mt-5 md:gap-4 gap-2 grid-rows-${
        courses.length / 3
      } items-center justify-center`}
    >
      {courses.map((e) => (
        <Card
          key={nanoid()}
          title={e.title}
          subTitle={e.subtitle}
          CourseNames={e.CourseNames}
          icon={e.icon}
          buttontext="Enroll now"
        />
      ))}
    </div>
  );
}

function Card({
  title,
  subTitle,
  CourseNames,
  icon,
  buttontext = "Apply now",
}) {
  return (
    <div
      key={nanoid()}
      className="border-1 w-full h-65 rounded-lg p-2  m-4 ml-0 grid bg-custom-50 cursor-pointer hover:scale-102 transition-all duration-300 shadow-md shadow-custom-500"
    >
      <h1 className="text-center underline-offset-8 underline underline-2 font-bold text-custom-2">
        {title || subTitle}
      </h1>
      <div className="flex justify-center items-center w-full">
        <Grains size={50} weight="fill" />
      </div>
      <h1 className="text-center text-xl">{subTitle || title}</h1>
      <div className="text-xs text-center text-custom-2 flex justify-center items-center mb-2 h-fit border-y-1 py-2 border-custom-400">
        {CourseNames.map((e) => e + " | ")}
      </div>
      <ButtonComp
        type="button"
        btntext={buttontext}
        classnames="rounded-md cursor-pointer hover:bg-custom-700 border-1 transition-all duration-300 hover:text-custom-100"
      />
    </div>
  );
}
