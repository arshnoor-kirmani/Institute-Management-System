import React from "react";
import { Outlet } from "react-router-dom";
import { AdminHeader, AdminFooter, AdminNavBox } from "./index";

export default function Layout() {
  return (
    <div className=" w-screen h-screen grid grid-rows-[10%_85%_5%] bg-blackcurrant-400">
      <AdminHeader></AdminHeader>
      <div className=" w-full h-full grid grid-cols-[17%_83%]">
        <AdminNavBox></AdminNavBox>
        <div className="OutletContainer w-full h-full overflow-auto">
          <Outlet></Outlet>
        </div>
      </div>
      <AdminFooter></AdminFooter>
    </div>
  );
}
