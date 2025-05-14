import React from "react";

export default function Logo({ className }) {
  return (
    <img
      src="logo.png"
      alt=""
      className={`object-cover size-full rounded-md lg:p-2 curser-pointer ${className}`}
    />
  );
}
