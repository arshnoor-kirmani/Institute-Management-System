import React from "react";

export default function ButtonComp(props) {
  return <button {...props}>{props.btntext}</button>;
}
