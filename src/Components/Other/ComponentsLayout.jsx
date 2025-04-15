import React from "react";
import { Outlet } from "react-router-dom";

export default function ComponentsLayout() {
  return (
    <div className=" w-screen h-screen grid grid-rows-[10%_85%_5%] bg-blackcurrant-400">
      <div className=" w-full h-full grid grid-cols-[17%_83%]">
        <div className="OutletContainer w-full h-full overflow-auto">
          <h1>Components Layout</h1>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}
