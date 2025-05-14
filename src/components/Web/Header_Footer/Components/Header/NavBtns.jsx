import { CaretDown } from "@phosphor-icons/react";
import React from "react";

export default function NavBtns({ btns }) {
  return (
    <div
      className="lg:grid size-full"
      style={{ gridTemplateColumns: `repeat(${btns.length}, auto)` }}
    >
      {btns.map((btn, index) => (
        <button
          key={index}
          className="group/navbtn cursor-pointer under lg:px-1 px-3 lg:py-0 md:py-6 py-3 lg:text-xs md:text-xl text-sm flex items-center justify-between text-white hover:text-gray-300 transition-all duration-300 ease-in-out relative"
        >
          <span
            className={`${
              btn.length > 1 ? "" : "group-active/navbtn:scale-98"
            } flex items-center justify-center text-center lg:px-1 px-3 lg:py-0 md:py-6 py-3 lg:text-xs md:text-xl text-sm`}
          >
            {btn[0]}
            {btn.length > 1 && <CaretDown className="pl-1" />}
          </span>
          {btn.length > 1 && (
            <>
              <ul className="lg:absolute hidden group-hover/navbtn:block bg-gray-300 text-black rounded-md shadow-lg w-40 z-10 top-[70%] left-0 overflow-hidden">
                {btn.slice(1).map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="px-3 py-2 text-left hover:bg-gray-400 transition-all duration-200 ease-in-out cursor-pointer active:scale-98"
                  >
                    <span className="">{item}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
          {index !== btns.length - 1 && (
            <span className="mx-0 text-xl hidden lg:inline">|</span>
          )}
        </button>
      ))}
    </div>
  );
}
