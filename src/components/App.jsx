import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Home, Weblayout } from "./Web";
import { AdminLayout } from "./Admin";
import { nanoid } from "@reduxjs/toolkit";

export default function App() {
  const NavBtnsValues = useSelector((state) => state.header.NavBtnsValues);
  const ImportantBtns = useSelector((state) => state.header.ImportantBtns);
  return (
    <Routes>
      <Route path="/" element={<Weblayout />}>
        <Route path="" element={<Home />} />
        {NavBtnsValues.map((e) => (
          <Route
            key={nanoid()}
            path={String(e[0]).toLowerCase().split(" ").join("")}
            element={<h1>{e[0]}</h1>}
          />
        ))}
        {ImportantBtns.map((e) => (
          <Route
            key={nanoid()}
            path={String(e).toLowerCase().split(" ").join("")}
            element={<h1>{e}</h1>}
          />
        ))}
      </Route>
      <Route path="/dashboard" element={<AdminLayout />}>
        <Route path="home" element={<h1>Home</h1>} />
        <Route path="about" element={<h1>About</h1>} />
        <Route path="contact" element={<h1>Contact</h1>} />
      </Route>
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/dashboard" element={<Dashboard />}>
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route> */}
      <Route path="*" exact={true} element={<h1>Not Found</h1>} />
    </Routes>
  );
}
