import React from "react";
import SectionTitle from "./SectionTitle";
import { nanoid } from "@reduxjs/toolkit";
import { data } from "react-router-dom";

export default function CertificateSection() {
  const Certificate = [
    {
      title: "University Grants Commission (UGC)",
      src: "https://aiu.edu.in/images/UGC-logo.png",
    },
    {
      title: "All India Council for Technical Education (AICTE)",
      src: "https://aiu.edu.in/images/AICTE-logo.png",
    },
    {
      title: "University Grants Commission (UGC)",
      src: "https://aiu.edu.in/images/wes-logo.png",
    },
    {
      title: "All India Council for Technical Education (AICTE)",
      src: "https://aiu.edu.in/images/AICTE-logo.png",
    },
    {
      title: "World Education Services (WES)",
      src: "https://aiu.edu.in/images/wes-logo.png",
    },
  ];
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
          <div className="cursor-pointer border-1 lg:h-25 md:h-35 shadow-md shadow-custom-400 p-1 size-full grid items-center justify-center grid-cols-[35%_60%] rounded-xl gap-2 hover:scale-105 transition-all duration-300">
            <img src={e.src} alt={e.title} />
            <h1 className="text-sm">{e.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
