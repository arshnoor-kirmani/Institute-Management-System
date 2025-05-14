import React from "react";
import SectionTitle from "./SectionTitle";
import { nanoid } from "@reduxjs/toolkit";

export default function TraningValue_placementsSection({
  tranings,
  placements,
}) {
  return (
    <div className="p-3 pt-1 grid gap-4">
      <div>
        <SectionTitle title="Traning &" subTitle="placements" />
      </div>
      <div className=" grid grid-rows-2 grid-cols-1 gap-10 items-center justify-center ">
        <div
          id="traning"
          className="md:flex grid grid-rows-[30%_60%] items-center gap-5 justify-center"
        >
          <div className="bg-custom-800 md:h-15 h-full text-white flex justify-center items-center md:w-40  font-semibold md:text-md text-xl capitalize rounded-md">
            <h1>Traning</h1>
          </div>
          <div
            id="container"
            className="flex flex-wrap items-center justify-center w-fit "
          >
            {tranings.map((e) => (
              <div
                key={nanoid()}
                className=" bg-custom-400 m-2 size-12 flex  justify-center items-center rounded-xl  p-2 cursor-pointer hover:scale-105 transition-all duration-300"
              >
                <img
                  src={e.imgUrl}
                  alt={e.title}
                  className="size-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div
          id="placement"
          className="md:flex grid grid-rows-[30%_60%] items-center gap-5 justify-center"
        >
          <div className="bg-custom-700 md:h-15 h-full text-white flex justify-center items-center md:w-40 font-semibold md:text-md text-xl capitalize rounded-md">
            <h1>placement</h1>
          </div>
          <div
            id="container"
            className="flex flex-wrap items-center justify-center w-fit "
          >
            {placements.map((p) => (
              <div
                key={nanoid()}
                className=" bg-custom-400 m-2 size-12 flex  justify-center items-center rounded-xl  p-2 cursor-pointer hover:scale-105 transition-all duration-300"
              >
                <img
                  src={p.imgUrl}
                  alt={p.title}
                  className="size-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
