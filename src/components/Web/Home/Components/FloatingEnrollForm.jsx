import React, { useState } from "react";
import FormComponents from "./FormComponents";
import { X } from "@phosphor-icons/react";

export default function FloatingEnrollForm() {
  return (
    <div
      id="FloationEnrollContainer"
      className="fixed top-0 left-0 w-screen h-screen bg-custom-800/90 z-1000 hidden justify-center items-center lg:px-[30%] lg:py-[5%] md:px-[15%] md:py-[25%]"
    >
      <div className="size-full p-6 border-2 rounded-2xl bg-custom-100 grid justify-center items-center relative">
        <button
          className="absolute top-0 right-0 bg-custom-400 p-3 rounded-bl-2xl hover:bg-custom-600 cursor-pointer transition-all duration-200"
          onClick={() => {
            const nav = document.getElementById("FloationEnrollContainer");
            nav.classList.toggle("hidden");
            nav.classList.toggle("flex");
          }}
        >
          <X size={38} className="fill-custom-100" />
        </button>
        <div>
          <h1 className="text-xl text-custom-900">Get Started</h1>
          <p className="text-xs text-custom-600">
            Enter your details and our experts will get in touch with you
            shortly!
          </p>
        </div>
        <FormComponents />
      </div>
    </div>
  );
}
