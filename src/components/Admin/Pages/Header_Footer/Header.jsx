import React, { useState } from "react";
import {
  BellSimple,
  Chats,
  GearSix,
  MagnifyingGlass,
  SignOut,
} from "@phosphor-icons/react";

export default function Header() {
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<== States ==>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const show_hide_container = (id, outerhide = false, e) => {
    let element = document.querySelector(`#${id}`);
    element.classList.toggle("grid");
    element.classList.toggle("hidden");
  };

  const [InstituteNameColor, setInstituteNameColor] = useState(
    "text-blackcurrant-950"
  );
  const [textColor, setTextColor] = useState("text-blackcurrant-50");
  const [HeadericonsColor, setHeadericonsColor] = useState("#352f44");
  const [HeadericonsSize, setHeadericonsSize] = useState(20);
  const [searchBtnActive, setSearchBtnActive] = useState(false);
  const [UserName, setUserName] = useState("Arshnoor");
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<==Funtions==>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const Logout = () => {
    alert("LogOut");
  };
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<== JSX ===>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  return (
    <div className="bg-blackcurrant-500">
      <div className="pb-4 text-[.8rem] w-fit h-full flex gap-3 pl-3 float-left items-center text-2xl px-4">
        <img src="public/vite.svg" alt="InstituteLogo" className="w-10" />
        <h1
          className={"h-full flex items-center text-2xl " + InstituteNameColor}
        >
          Hope Group of Insitutions
        </h1>
      </div>
      <div className="flex justify-evenly float-right w-60 h-full items-center mr-3">
        <div
          className={`relative p-1.5 cursor-pointer flex items-center active:85 ${
            searchBtnActive
              ? "border-2 border-blackcurrant-900 w-8 h-7"
              : " hover:scale-105"
          }`}
          title="Search"
          onClick={(e) => {
            if (
              e.currentTarget == e.target ||
              e.target.localName == "svg" ||
              e.target.localName == "path"
            ) {
              let input = document.querySelector("#searchInputBox");
              input.classList.toggle("hidden");
              input.classList.toggle("inline");
            }
          }}
        >
          <input
            type="text"
            name="search"
            id="searchInputBox"
            className="border-2 border-blackcurrant-900 absolute right-full hidden"
          />
          <MagnifyingGlass size={HeadericonsSize} weight="thin" />
        </div>
        <div
          className="relative p-1.5 cursor-pointer flex items-center hover:scale-105 active:85 "
          title="Massage"
        >
          <Chats size={HeadericonsSize} weight="duotone" />
        </div>
        <div
          className="relative p-1.5 cursor-pointer flex items-center hover:scale-105 active:85 "
          title="Notifiction"
        >
          <BellSimple size={HeadericonsSize} weight="duotone" />
        </div>
        <div
          className="relative p-1.5 cursor-pointer flex items-center hover:scale-105 active:85 "
          title="Setting"
        >
          <GearSix size={HeadericonsSize} weight="duotone" />
        </div>
        <div className="p-2 rounded-xl  bg-blackcurrant-400 relative">
          <div
            className="cursor-pointer"
            onClick={(event) => {
              show_hide_container("userinfobox", false, event);
            }}
          >
            <img
              src="./public/vite.svg"
              alt=""
              className="size-6 pointer-events-none"
            />
          </div>
          <div
            className="absolute hidden outline-blackcurrant-950 outline-1 rounded-sm right-5 top-full mt-2 size-42  grid-rows-[20%_80%] bg-blackcurrant-600"
            id="userinfobox"
          >
            <div className="bg-blackcurrant-500 flex justify-center item-center text-blackcurrant-200">
              <h1>{UserName}</h1>
            </div>
            <ul className="grid grid-rows-3">
              <li
                className={`flex items-center ${textColor} p-1 border-b-1 border-blackcurrant-800 cursor-pointer`}
              >
                Account Settings
              </li>
              <li
                className={`flex items-center ${textColor} p-1 border-b-1 border-blackcurrant-800 cursor-pointer`}
              >
                Options
              </li>
              <li
                className={`flex items-center ${textColor} p-1 cursor-pointer`}
                onClick={Logout}
              >
                Log Out
                <SignOut
                  size={HeadericonsSize}
                  weight="thin"
                  className="ml-1.5"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
