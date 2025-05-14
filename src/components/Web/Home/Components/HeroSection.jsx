import React, { useEffect, useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import ImageSlider from "./ImageSlider";

export default function HeroSection({ images }) {
  const [imageSlideleft, setImageSlideleft] = useState(0);
  const [bool, setBool] = useState(true);
  useEffect(() => {
    let interval = setInterval(() => {
      if (imageSlideleft != -(images.length - 1) * 100 && bool) {
        setImageSlideleft((prev) => prev - 100);
      } else if (imageSlideleft < 0) {
        setImageSlideleft(imageSlideleft + 100);
        setBool(false);
      } else if (imageSlideleft == 0) {
        setBool(true);
        setImageSlideleft((prev) => prev - 100);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [imageSlideleft]);

  return (
    <div className="w-full h-50 md:h-full flex flex-col items-center justify-center md:p-4 md:px-2 p-1">
      <div
        id="imageGallry"
        className="overflow-hidden relative w-full md:h-95 h-full  flex justify-center items-center rounded-lg shadow-md "
      >
        <CaretLeft
          weight="bold"
          size={30}
          className="bg-red absolute left-1 fill-custom-2 z-10 cursor-pointer transition-all duration-300 hover:scale-110 active:scale-98"
          onClick={() => {
            if (imageSlideleft < 0) {
              setImageSlideleft(imageSlideleft + 100);
            }
          }}
        />
        {/* ================================== */}
        <div
          className="absolute top-0 rounded-lg grid h-full transition-all duration-700 ease-initial py-8.5 md:py-14 lg:py-0"
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
        {/* ================================== */}
        <CaretRight
          weight="bold"
          size={30}
          className="absolute right-1 fill-custom-2 z-10 cursor-pointer transition-all duration-300 hover:scale-110 active:scale-98"
          onClick={() => {
            if (-(images.length - 2) * 100 <= imageSlideleft) {
              setImageSlideleft((prev) => prev - 100);
            }
          }}
        />
      </div>
    </div>
  );
}
