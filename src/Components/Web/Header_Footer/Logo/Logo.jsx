import React from "react";

export default function Logo({ src, alt, width, height }) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="bg-custom-5 p-3 rounded-md cursor-pointer"
    />
  );
}
