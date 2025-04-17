import React from "react";
import ButtonComp from "./ButtonComp";
import { ID } from "appwrite";
export default function CourseCards({ courses }) {
  return (
    <div className={`w-full grid grid-cols-4 mt-5`}>
      {courses.map((e) => (
        <Card
          key={e.title}
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
  console.log(title);
  return (
    <div
      key={title}
      className="border-1 w-55 h-65 rounded-lg p-2 m-4 grid bg-custom-5 cursor-pointer hover:scale-102 transition-all duration-300"
    >
      <h1 className="text-center underline-offset-8 underline underline-2 font-bold text-custom-2">
        {title || subTitle}
      </h1>
      <div className="flex justify-center items-center w-full">{icon}</div>
      <h1 className="text-center text-xl">{subTitle || title}</h1>
      <div className="text-xs text-center text-custom-2 flex justify-center items-center mb-2 h-fit border-y-2 py-2 border-custom-4">
        {CourseNames.map((e) => e + " | ")}
      </div>
      <ButtonComp type="button" btntext={buttontext} />
    </div>
  );
}
