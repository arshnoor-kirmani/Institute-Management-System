import React from "react";

export default function ImageSlider({ images }) {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <img
        src={images[0]}
        alt={images[1]}
        className="w-full h-90 object-cover rounded-lg"
      />
    </div>
  );
}
