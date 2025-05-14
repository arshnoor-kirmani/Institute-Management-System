import React from "react";

export default function SectionTitle({ title, subTitle }) {
  return (
    <h1 className="text-4xl decoration-2 text-custom-800 font-bold text-center capitalize">
      {title} <span className="text-custom-400">{subTitle || ""}</span>
    </h1>
  );
}
