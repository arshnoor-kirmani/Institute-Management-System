import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Weblayout } from "./Web";
import { AdminLayout } from "./Admin";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Weblayout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<h1>About</h1>} />
        <Route path="contact" element={<h1>Contact</h1>} />
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
    </Routes>
  );
}
