import React from "react";

export default function ButtonComp({ type, btntext, classnames }) {
  return (
    <button
      type={type}
      className={classnames}
      onClick={(e) => e.preventDefault()}
    >
      {btntext}
    </button>
  );
}
