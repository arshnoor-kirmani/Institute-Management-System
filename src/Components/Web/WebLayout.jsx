import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header_Footer/Header_";
import Footer from "./Header_Footer/Footer_";
import { Home } from "./index";
export default function Layout() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}
