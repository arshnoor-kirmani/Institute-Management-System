import React, { useState } from "react";
import Logo from "./Components/Logo/Logo";
import Navigatonbtn from "./Components/Header/Navigatonbtn";
import NavBtns from "./Components/Header/NavBtns";
import { CaretDown, List, X } from "@phosphor-icons/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Offical_Header() {
  const [headerMobile, setHeaderMobile] = useState(false);
  const NavBtnsValues = useSelector((state) => state.header.NavBtnsValues);
  const ImportantBtns = useSelector((state) => state.header.ImportantBtns);
  return (
    <header className="relative bg-custom-600 w-full h-30 flex justify-between items-center z-10">
      <div className="relative w-70 h-full lg:py-2 p-1 py-2.5 lg:px-2 md:py-1 md:w-80 lg:w-70">
        <Logo className="bg-custom-50 cursor-pointer" />
      </div>
      <div
        id="bar"
        className=" px-2 flex lg:hidden items-center justify-center size-20 float-right text-custom-600 ml-auto cursor-pointer active:scale-97 transition-all duration-300"
        onClick={() => {
          setHeaderMobile((prev) => !prev);
          const nav = document.getElementById("mobile_nav_container");
          if (headerMobile) {
            nav.style.transform = "translateY(-100%)";
          } else {
            nav.style.transform = "translateY(0)";
          }
        }}
      >
        {headerMobile ? (
          <X size={38} className="fill-custom-100" />
        ) : (
          <List size={38} className="fill-custom-100" />
        )}
      </div>
      <div id="nav_container" className=" w-[75%] h-full  hidden lg:grid">
        <div
          id="NevigationBtn"
          className=" grid xl:grid-cols-[45%_auto] lg:grid-cols-[50%_auto] items-center gap-1.5 w-full"
        >
          <div
            id="contact"
            className="flex items-center justify-between text-sm text-custom-100 pr-5"
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
            btns={ImportantBtns}
            div_classes={"grid grid-cols-5 gap-2 w-full text-custom-800"}
            btn_classes={
              "size-full text-xs px-1 py-1.5 text-nowrap rounded-md bg-custom-200 cursor-pointer transition-all duration-300 ease-in-out active:scale-99 hover:bg-custom-500 hover:text-white hover:shadow-md"
            }
          />
        </div>
        <div id="NavBtn" className="">
          <NavBtns btns={NavBtnsValues} />
        </div>
      </div>
      <div
        id="mobile_nav_container"
        className={` ${
          headerMobile ? "grid" : "hidden"
        } absolute grid lg:hidden w-screen h-fit bg-custom-800 top-full left-0`}
      >
        <div
          id="NevigationBtn"
          className=" grid lg:grid-cols-[45%_auto] items-center gap-1.5 w-full md:px-5 lg:px-0 px-1 h-30 lg:h-full"
        >
          <div
            id="contact"
            className="flex items-center justify-evenly text-xs md:text-sm text-custom-100 w-full"
          >
            <h2 className="cursor-pointer active:scale-99 transition  duration-200 ease-in-out">
              Phone : +91 7236044212
            </h2>
            <span>|</span>
            <h2 className="cursor-pointer active:scale-99 transition  duration-200 ease-in-out">
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
            div_classes="grid md:grid-cols-5 grid-cols-4 md:gap-2 gap-1 w-full text-custom-800"
            btn_classes="bg-custom-200 md:px-2 md:py-3 md:text-md py-2 text-xs rounded-md text-nowrap cursor-pointer transition-all duration-300 ease-in-out active:scale-99 hover:bg-custom-500 hover:text-white hover:shadow-md"
          />
        </div>
        <div id="NavBtn" className="size-full relative z-100">
          {mobile_nav(NavBtnsValues)}
        </div>
      </div>
    </header>
  );
}
function mobile_nav(btns) {
  return (
    <div className="text-custom-200 grid ">
      {btns.map((btn, index) => (
        <button
          key={index}
          className="group text-left px-4 py-2 grid items-left cursor-pointer hover:text-custom-300"
          onClick={(e) => {
            e.currentTarget.classList.toggle("active");
          }}
        >
          <span className="flex items-center pointer-none: ">
            {btn[0]}
            {btn.length > 1 && <CaretDown className="pl-1" />}
          </span>
          {btn.length > 1 && (
            <>
              <ul className="hidden group-[.active]:block bg-gray-300 text-black rounded-md shadow-lg w-full z-10 top-[100%] left-0 overflow-hidden transition-all duration-300 ease-in-out">
                {btn.slice(1).map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="px-3 py-2 text-left hover:bg-gray-400 transition-all duration-200 ease-in-out cursor-pointer active:scale-98"
                  >
                    <Link to={"dashboard/home"}>
                      {" "}
                      <span>{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </button>
      ))}
    </div>
  );
}
