import React from "react";
import ButtonComp from "./ButtonComp";

export default function HomeSecondSection() {
  return (
    <div className="w-full h-140">
      <div className="size-full grid grid-cols-2 p-5">
        <div
          id="left"
          className="bg-custom-5 flex flex-col gap-2 rounded-2xl p-5 m-12 text-custom-1 shadow-custom-3 drop-shadow-xl border-1 border-custom-4"
        >
          <div id="top_para" className="capitalize text-custom-2">
            <p>About The Assian International Univesty</p>
          </div>
          <div className="capitalize text-2xl">
            <h1 className="text-shadow-lg text-shadow-custom-5">
              Weclome To the asian International Univesty
            </h1>
          </div>
          <div className="normal-case">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              nesciunt doloremque quasi optio est illum unde tempora cupiditate.
              Quia mollitia, nostrum doloribus sed consequuntur quisquam eaque
              totam maxime. Consequuntur, mollitia.
            </p>
          </div>
          <div id="button" className="mt-3 w-30 h-12">
            <ButtonComp
              type="button"
              btntext="Read more..."
              classnames="text-sm"
            />
          </div>
        </div>
        <div id="right" className=" flex justify-center items-center">
          <div className="relative w-90 h-100 rounded-lg m-12">
            <span className="w-40 h-30 -top-7 -right-7 rounded-2xl  bg-custom-3 absolute text-red-500 shadow-md -z-10"></span>
            <span className="w-40 h-30 -bottom-7 -left-7 rounded-2xl  bg-custom-3 absolute text-red-500 shadow-md -z-10"></span>
            <img
              src="heroImg/student1.jpg"
              alt=""
              className="size-full object-cover border-custom-2 border-2 rounded-2xl shadow-custom-3 drop-shadow-xl cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
