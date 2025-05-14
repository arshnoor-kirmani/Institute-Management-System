import React from "react";

export default function Navigatonbtn({
  btns,
  div_classes = "",
  btn_classes = "",
}) {
  return (
    <div id="btn" className={div_classes}>
      {btns.map((text) => (
        <button key={text} className={btn_classes}>
          {text}
        </button>
      ))}
    </div>
  );
}
