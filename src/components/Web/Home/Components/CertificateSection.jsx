import React from "react";
import SectionTitle from "./SectionTitle";
import { nanoid } from "@reduxjs/toolkit";
import { data } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CertificateSection() {
  const Certificate = useSelector((state) => state.home.CertificateSection);
  return (
    <div>
      <div className="py-4">
        <SectionTitle title="Certificate" />
      </div>
      <div
        id="certificateContainer"
        className="grid lg:grid-cols-5 grid-cols-2 p-4 gap-4"
      >
        {Certificate.map((e) => (
          <div
            key={nanoid()}
            className="cursor-pointer border-1 lg:h-25 md:h-35 shadow-md shadow-custom-400 p-1 size-full grid items-center justify-center grid-cols-[35%_60%] rounded-xl gap-2 hover:scale-105 transition-all duration-300"
          >
            <img src={e.src} alt={e.title} className="" />
            <h1 className="text-sm">{e.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
