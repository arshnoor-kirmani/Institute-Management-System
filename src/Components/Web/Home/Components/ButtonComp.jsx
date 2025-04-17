import React from "react";

export default function ButtonComp({ type, btntext, classnames }) {
  return (
    <button
      type={type}
      className={
        "size-full bg-custom-3 font-bold text-custom-5 rounded-md cursor-pointer hover:bg-transparent border-2 hover:border-custom-1 hover:text-custom-2 transition-all duration-300 active:scale-98 " +
        classnames
      }
    >
      {btntext}
    </button>
  );
}
