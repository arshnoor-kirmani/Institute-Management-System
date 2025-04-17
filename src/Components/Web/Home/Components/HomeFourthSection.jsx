import React from "react";
import SectionTitle from "./SectionTitle";

export default function HomeFourthSection({ cards }) {
  return (
    <div className="mt-3">
      <div>
        <SectionTitle title="Institute" subTitle="Life" />
        <p className="text-lg text-custom-3 text-center mt-2">
          Explore a variety of courses tailored for your learning journey.
        </p>
      </div>
      <div className="w-full grid grid-cols-3 mt-3">
        {cards.map((e) => (
          <div
            key={e.title}
            className="z-0 h-55 m-5 rounded-2xl overflow-hidden cursor-pointer group relative"
          >
            <img
              src={e.src}
              alt=""
              width={100}
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300 ease-linear"
            />
            <div className="absolute hidden group-hover:flex justify-center items-center top-0 left-0 w-full h-full bg-black/50 group-hover:bg-black/30 transition-all duration-300 ease-linear">
              <h1 className="capitalize text-2xl font-bold text-white">
                {e.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
