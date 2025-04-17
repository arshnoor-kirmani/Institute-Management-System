import React from "react";

export default function SectionTitle({ title, subTitle }) {
  return (
    <h1 className="text-4xl decoration-2 text-custom-2 font-bold text-center capitalize">
      {title} <span className="text-custom-4">{subTitle || ""}</span>
    </h1>
  );
}
