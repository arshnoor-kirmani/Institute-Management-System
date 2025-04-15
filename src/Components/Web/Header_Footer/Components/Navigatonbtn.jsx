import React from "react";

export default function Navigatonbtn({ btns }) {
  return (
    <div id="btn" className="grid grid-cols-5 gap-2 w-full text-custom-1">
      {btns.map((text) => (
        <button
          key={text}
          className=" text-xs px-1 py-1.5 text-nowrap rounded-md bg-custom-5 cursor-pointer transition-all duration-300 ease-in-out active:scale-99 hover:bg-custom-4 hover:text-white hover:shadow-md"
        >
          {text}
        </button>
      ))}
    </div>
  );
}
