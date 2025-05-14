import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header_Footer/Offical_Header.jsx";
import Footer from "./Header_Footer/Offical_Footer.jsx";
export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
