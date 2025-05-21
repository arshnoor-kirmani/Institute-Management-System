import { Users } from "@phosphor-icons/react";
import React, { useState } from "react";
import ButtonComp from "./ButtonComp";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

export default function FormComponents() {
  const departments = useSelector((state) => state.home.department_courses);
  const departmentKeys = Object.keys(departments);
  const [course, setCourse] = useState([]);
  function FormHandeler(e) {}

  return (
    <div className="">
      <form
        action=""
        className="grid  gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          FormHandeler(e.target);
        }}
      >
        <label htmlFor="name" className="grid grid-cols-[9%_91%] h-13 border-1">
          <div className="border-r-1 flex justify-center items-center text-xl p-0.5 text-custom-600">
            <Users weight="fill" />
          </div>
          <input
            type="text"
            name="name"
            id="name"
            className="size-full px-2"
            placeholder="Enter your Name"
          />
        </label>
        <label
          htmlFor="email"
          className="grid grid-cols-[9%_91%] h-13 border-1"
        >
          <div className="border-r-1 flex justify-center items-center text-xl p-0.5 text-custom-600">
            <Users weight="fill" />
          </div>
          <input
            type="email"
            name="email"
            id="email"
            className="size-full px-2"
            placeholder="Enter your Email"
          />
        </label>
        <label
          htmlFor="number"
          className="grid grid-cols-[9%_91%] h-13 border-1"
        >
          <div className="border-r-1 flex justify-center items-center text-xl p-0.5 text-custom-600">
            <Users weight="fill" />
          </div>
          <input
            type="number"
            name="number"
            id="number"
            className="size-full px-2"
            placeholder="Enter your Number"
          />
        </label>
        <label
          htmlFor="department"
          className="grid grid-cols-[9%_91%] h-13 border-1"
        >
          <div className="border-r-1 flex justify-center items-center text-xl p-0.5 text-custom-600">
            <Users weight="fill" />
          </div>
          <select
            name="department"
            id="department"
            className="px-2"
            // onChange={(e) => {
            //   setCourse(departments[e.target.value]);
            //   e.currentTarget.value = e.target.value;
            // }}
          >
            <option value="">------Select Department------</option>
            {departmentKeys.map((e) => (
              <option key={nanoid()} value={e}>
                {e}
              </option>
            ))}
          </select>
        </label>
        <label
          htmlFor="course"
          className="grid grid-cols-[9%_91%] h-13 border-1"
        >
          <div className="border-r-1 flex justify-center items-center text-xl p-0.5 text-custom-600">
            <Users weight="fill" />
          </div>
          <select name="course" id="course" className="px-2">
            <option value="BCA">------Select Course------</option>
            {course.map((e) => (
              <option key={nanoid()} value={e}>
                {e}
              </option>
            ))}
          </select>
        </label>
        <label
          htmlFor="checkbox"
          className=" flex justify-center items-center relative"
        >
          <input
            type="checkbox"
            id="checkbox"
            className="mr-3 absolute top-2 left-1.5"
          />
          <p className="pl-7">
            I authorise Hope Group of institution and its associates to contact
            me with updates & notifications via email, SMS, Whtatsapp and Voice
            Call. this contsent will override any registration for DNC/NDNC.
          </p>
        </label>
        {/* <ButtonComp
          type="submit"
          btntext="Enroll Now"
          className="p-3 rounded-md cursor-pointer hover:bg-custom-700 border-1 transition-all duration-300 hover:text-custom-100 font-bold"
        /> */}
        <button
          type="submit"
          className="p-3 rounded-md cursor-pointer hover:bg-custom-700 border-1 transition-all duration-300 hover:text-custom-100 font-bold"
        >
          Enroll Now
        </button>
      </form>
    </div>
  );
}
