import React, { useState } from "react";
import ImageSlider from "./ImageSlider";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

export default function HeroSection({ images }) {
  const [imageSlideleft, setImageSlideleft] = useState(0);
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      <div
        id="imageGallry"
        className="overflow-hidden relative w-full h-150 flex justify-center items-center rounded-lg shadow-md "
      >
        <CaretLeft
          weight="bold"
          size={30}
          className="absolute left-1 fill-custom-2 z-10 cursor-pointer transition-all duration-300 hover:scale-110 active:scale-98"
          onClick={() => {
            if (imageSlideleft < 0) {
              setImageSlideleft(imageSlideleft + 100);
            }
          }}
        />
        <div
          className="absolute top-0 rounded-lg grid h-full"
          style={{
            gridTemplateColumns: `repeat(${images.length}, ${
              100 / images.length
            }%)`,
            left: `${imageSlideleft}%`,
            width: `${images.length * 100}%`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="relative w-full flex justify-center items-center"
            >
              <ImageSlider images={image} />
            </div>
          ))}
        </div>
        <CaretRight
          weight="bold"
          size={30}
          className="absolute right-1 fill-custom-2 z-10 cursor-pointer transition-all duration-300 hover:scale-110 active:scale-98"
          onClick={() => {
            if (-(images.length - 2) * 100 <= imageSlideleft) {
              setImageSlideleft(imageSlideleft - 100);
            }
          }}
        />
      </div>
    </div>
  );
}
