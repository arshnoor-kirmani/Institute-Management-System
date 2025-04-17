import React from "react";
import CourseCards from "./CourseCards";
import SectionTitle from "./SectionTitle";

export default function CourseCategorySection({ courses }) {
  return (
    <div className="w-full min-h-80 grid justify-center p-3">
      <div>
        <SectionTitle title="Courses" subTitle="Categories" />
        <p className="text-lg text-custom-3 text-center mt-2">
          Explore a variety of courses tailored for your learning journey.
        </p>
      </div>
      <div id="courseCards" className="w-full">
        <CourseCards courses={courses} />
      </div>
    </div>
  );
}
