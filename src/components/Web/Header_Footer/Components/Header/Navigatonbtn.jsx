import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { Link } from "react-router-dom";

export default function Navigatonbtn({
  btns,
  div_classes = "",
  btn_classes = "",
}) {
  return (
    <div id="btn" className={div_classes}>
      {btns.map((text) => (
        <Link key={nanoid()} to={`/${text.split(" ").join("")}`}>
          <button className={btn_classes}>{text}</button>
        </Link>
      ))}
    </div>
  );
}
