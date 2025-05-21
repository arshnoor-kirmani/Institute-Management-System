import React from "react";
import { Link } from "react-router-dom";

export default function Logo({ className }) {
  return (
    <Link to="/">
      <img
        src="logo.png"
        alt=""
        className={`object-cover size-full rounded-md lg:p-2 curser-pointer ${className}`}
      />
    </Link>
  );
}
