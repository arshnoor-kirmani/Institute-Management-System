import React from "react";
import FormComponents from "./FormComponents";

export default function GetTouch() {
  return (
    <div className=" grid md:grid-cols-2 grid-cols-1 grid-rows-2 md:grid-rows-1 lg:px-8 md:px-4  size-full">
      <div className=" grid px-5 py-10 bg-custom-50 h-fuoll gap-5">
        <h1 className="text-3xl text-custom-500">Get in Touch</h1>
        {/* <div className=""> */}
        <p className="text-5xl text-custom-900">
          Do You need new <span className="text-custom-500">help</span> or{" "}
          <span className="text-custom-500">support</span>? help desk 24/7
        </p>
        <p className="text-2xl">
          one to one session for each student learn, understand & revise
        </p>
        <div>
          <h1 className="text-3xl  text-custom-600">9899108107</h1>
          <h1 className="text-3xl  text-custom-600">9319931941</h1>
        </div>
        <p className="text-xl">or write to us: info@aiu.edu.in</p>
        {/* </div> */}
      </div>
      <div className=" px-3 py-5 border-3 border-custom-600 m-4 rounded-xl gap-3 grid">
        <div>
          <h1 className="text-2xl">Get started</h1>
          <p className="text-custom-600 text-sm">
            enter your datails and our experts will get in touch with you
            shortly
          </p>
        </div>
        <FormComponents />
      </div>
    </div>
  );
}
