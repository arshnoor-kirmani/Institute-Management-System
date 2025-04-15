import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../Header_Footer";
import NavBox from "../NavContainer/NavBox";
import "./Layout.css";

export default function Layout() {
  return (
    <div className=" w-screen h-screen grid grid-rows-[10%_85%_5%] bg-blackcurrant-400">
      <Header></Header>
      <div className=" w-full h-full grid grid-cols-[17%_83%]">
        <NavBox></NavBox>
        <div className="OutletContainer w-full h-full overflow-auto">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
