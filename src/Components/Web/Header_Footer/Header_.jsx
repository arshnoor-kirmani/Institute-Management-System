import React, { useState } from "react";
import Logo from "./Logo/Logo";
import Navigatonbtn from "./Components/Navigatonbtn";
import NavBtns from "./Components/NavBtns";

export default function Header() {
  const [NavBtnsValues, setNavBtnsValues] = useState([
    [
      "About",
      "About AUI",
      "Our Inspiration",
      "Vice Chancellor's Message",
      "Registrar Massage",
      "COE Massage",
      "Vision & Mission",
      "University Act",
      "Recognition / Approvals",
      "Awards & Achievements",
    ],
    [
      "Programmes",
      "Faculty of Arts",
      "Faculty of Science",
      "Faculty of Commerce",
      "Faculty of Management",
      "Faculty of Law",
      "Faculty of Engineering & Technology",
      "Faculty of Pharmacy",
      "Faculty of Hotel Management & Catering Technology",
    ],
    ["Vocational"],
    [
      "Admission",
      "Admission Process",
      "Eligibility Criteria",
      "Scholarship",
      "Fee Structure",
    ],
    ["Research"],
    ["Placements"],
    ["Student Zone"],
    ["Life@Hope"],
    ["Admission 2025"],
    ["Blog"],
  ]);
  return (
    <div className="w-screen h-20 bg-custom-2 flex ">
      <div id="logo" className="h-full w-fit px-2 flex items-center ">
        <Logo
          src="logo.png"
          type="inText"
          alt="Hope Institue Logo"
          width={200}
          height="auto"
        />
      </div>
      <div id="nav" className="w-full hidden md:grid items-center px-2">
        <div
          id="NevigationBtn"
          className="grid grid-cols-[45%_auto] items-center gap-1.5 w-full"
        >
          <div
            id="contact"
            className="flex items-center justify-between text-sm text-custom-5 pr-5"
          >
            <h2 className="cursor-pointer active:scale-99 transition  duration-200 ease-in-out text-sm">
              Phone : +91 7236044212
            </h2>
            <span>|</span>
            <h2 className="cursor-pointer active:scale-99 transition  duration-200 ease-in-out text-sm">
              Email : arshnoorkirmani@gmail.com
            </h2>
          </div>
          <Navigatonbtn
            btns={[
              "Downloads",
              "Apply Now",
              "Student Login",
              "Login",
              "Contact Us",
            ]}
          />
        </div>
        <div id="NavBtn" className="">
          <NavBtns btns={NavBtnsValues} />
        </div>
      </div>
    </div>
  );
}
