import React from "react";
import ButtonComp from "./ButtonComp";

export default function HomeSecondSection({ studentImage }) {
  return (
    <div className="w-full h-full">
      <div className="size-full grid md:grid-cols-2 grid-cols-1 grid-rows-2 md:grid-rows-1 lg:p-5 p-2 md:gap-8 lg:gap-0 items-center">
        <div
          id="left"
          className="bg-custom-500 h-fit flex flex-col md:gap-2 lg:gap-5 rounded-2xl p-5 md:py-7 lg:py-8 lg:mr-10 m-0 text-custom-50 shadow-custom-300 drop-shadow-xl border-1 border-custom-400"
        >
          <div id="top_para" className="capitalize text-custom-200">
            <p>About The Assian International Univesty</p>
          </div>
          <div className="capitalize md:text-2xl">
            <h1 className="text-shadow-lg text-shadow-custom-500">
              Weclome To the asian International Univesty
            </h1>
          </div>
          <div className="normal-case md:text-xl lg:text-md md:mt-3">
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
              className="text-sm size-full rounded-md cursor-pointer hover:bg-custom-700 border-2 border-custom-300 transition-all duration-300 hover:text-custom-100 font-bold active:scale-98 "
            />
          </div>
        </div>
        <div id="right" className=" flex justify-center items-center">
          <div className="relative w-90 h-100 rounded-lg lg:m-12 m-7">
            <span className="w-40 h-30 -top-7 -right-7 rounded-2xl  bg-custom-300 absolute text-red-500 shadow-md -z-10"></span>
            <span className="w-40 h-30 -bottom-7 -left-7 rounded-2xl  bg-custom-300 absolute text-red-500 shadow-md -z-10"></span>
            <img
              src={studentImage}
              alt=""
              className="size-full object-cover border-custom-200 border-2 rounded-2xl shadow-custom-300 drop-shadow-xl cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
