import {
  HouseLine,
  User,
  Sliders,
  Student,
  GraduationCap,
  Scroll,
  UserCircleGear,
  Books,
  Certificate,
  Tilde,
  CaretDoubleRight,
} from "@phosphor-icons/react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBox() {
  const [dashboard_arrow_color, setarrowcolor] = useState("#f4f4fa");
  return (
    <nav className="hidden md:grid w-full h-full gap-[1%] bg-blackcurrant-800 border-r-1 border-blackcurrant-900 text-blackcurrant-200 ">
      <ul className="w-full h-full flex flex-col">
        <li className="cursor-pointer w-full h-full border-b-1 flex items-center border-blackcurrant-900">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive ? "bg-blackcurrant-950" : ""
              } grid grid-cols-[20%_70%_10%] text-[1rem] items-center justify-center px-3 w-full h-full`
            }
          >
            <HouseLine size={28} weight="duotone" />
            <span className="pl-3 capitalize text-blackcurrant-300 ">
              Dashboard
            </span>
            <CaretDoubleRight
              size={16}
              color={dashboard_arrow_color}
            ></CaretDoubleRight>
          </NavLink>
        </li>
        <li className="cursor-pointer w-full h-full border-b-1 flex items-center border-blackcurrant-900">
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `${
                isActive ? "bg-blackcurrant-950" : ""
              } grid grid-cols-[20%_70%_10%] text-[1rem] items-center justify-center px-3 w-full h-full`
            }
          >
            <User size={28} weight="duotone" />
            <span className="pl-3 capitalize text-blackcurrant-300">
              profile
            </span>
            <CaretDoubleRight
              size={16}
              color={dashboard_arrow_color}
            ></CaretDoubleRight>
          </NavLink>
        </li>
        <li className="cursor-pointer w-full h-full border-b-1 flex items-center border-blackcurrant-900">
          <NavLink
            to="/siteSetting"
            className={({ isActive }) =>
              `${
                isActive ? "bg-blackcurrant-950" : ""
              } grid grid-cols-[20%_70%_10%] text-[1rem] items-center justify-center px-3 w-full h-full`
            }
          >
            <Sliders size={28} weight="duotone" />
            <span className="pl-3 capitalize text-blackcurrant-300">
              site Setting
            </span>
            <CaretDoubleRight
              size={16}
              color={dashboard_arrow_color}
            ></CaretDoubleRight>
          </NavLink>
        </li>
        <li className="cursor-pointer w-full h-full border-b-1 flex items-center border-blackcurrant-900">
          <NavLink
            to="/students"
            className={({ isActive }) =>
              `${
                isActive ? "bg-blackcurrant-950" : ""
              } grid grid-cols-[20%_70%_10%] text-[1rem] items-center justify-center px-3 w-full h-full`
            }
          >
            <Student size={28} weight="duotone" />
            <span className="pl-3 capitalize text-blackcurrant-300">
              students
            </span>
            <CaretDoubleRight
              size={16}
              color={dashboard_arrow_color}
            ></CaretDoubleRight>
          </NavLink>
        </li>
        <li className="cursor-pointer w-full h-full border-b-1 flex items-center border-blackcurrant-900">
          <NavLink
            to="/teachers"
            className={({ isActive }) =>
              `${
                isActive ? "bg-blackcurrant-950" : ""
              } grid grid-cols-[20%_70%_10%] text-[1rem] items-center justify-center px-3 w-full h-full`
            }
          >
            <GraduationCap size={28} weight="duotone" />
            <span className="pl-3 capitalize text-blackcurrant-300">
              teachers
            </span>
            <CaretDoubleRight
              size={16}
              color={dashboard_arrow_color}
            ></CaretDoubleRight>
          </NavLink>
        </li>
        <li className="cursor-pointer w-full h-full border-b-1 flex items-center border-blackcurrant-900">
          <NavLink
            to="/exam"
            className={({ isActive }) =>
              `${
                isActive ? "bg-blackcurrant-950" : ""
              } grid grid-cols-[20%_70%_10%] text-[1rem] items-center justify-center px-3 w-full h-full`
            }
          >
            <Scroll size={28} weight="duotone" />
            <span className="pl-3 capitalize text-blackcurrant-300">exam</span>
            <CaretDoubleRight
              size={16}
              color={dashboard_arrow_color}
            ></CaretDoubleRight>
          </NavLink>
        </li>
        <li className="cursor-pointer w-full h-full border-b-1 flex items-center border-blackcurrant-900">
          <NavLink
            to="/mangeruser"
            className={({ isActive }) =>
              `${
                isActive ? "bg-blackcurrant-950" : ""
              } grid grid-cols-[20%_70%_10%] text-[1rem] items-center justify-center px-3 w-full h-full`
            }
          >
            <UserCircleGear size={28} weight="duotone" />
            <span className="pl-3 capitalize text-blackcurrant-300">
              manger user
            </span>
            <CaretDoubleRight
              size={16}
              color={dashboard_arrow_color}
            ></CaretDoubleRight>
          </NavLink>
        </li>
        <li className="cursor-pointer w-full h-full border-b-1 flex items-center border-blackcurrant-900">
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              `${
                isActive ? "bg-blackcurrant-950" : ""
              } grid grid-cols-[20%_70%_10%] text-[1rem] items-center justify-center px-3 w-full h-full`
            }
          >
            <Books size={28} weight="duotone" />
            <span className="pl-3 capitalize text-blackcurrant-300">
              courses
            </span>
            <CaretDoubleRight
              size={16}
              color={dashboard_arrow_color}
            ></CaretDoubleRight>
          </NavLink>
        </li>
        <li className="cursor-pointer w-full h-full border-b-1 flex items-center border-blackcurrant-900">
          <NavLink
            to="/marksheet"
            className={({ isActive }) =>
              `${
                isActive ? "bg-blackcurrant-950" : ""
              } grid grid-cols-[20%_70%_10%] text-[1rem] items-center justify-center px-3 w-full h-full`
            }
          >
            <Certificate size={28} weight="duotone" />
            <span className="pl-3 capitalize text-blackcurrant-300">
              marksheet
            </span>
            <CaretDoubleRight
              size={16}
              color={dashboard_arrow_color}
            ></CaretDoubleRight>
          </NavLink>
        </li>
        <li className="cursor-pointer w-full h-full flex items-center">
          <NavLink
            to="/feesReport"
            className={({ isActive }) =>
              `${
                isActive ? "bg-blackcurrant-950" : ""
              } grid grid-cols-[20%_70%_10%] text-[1rem] items-center justify-center px-3 w-full h-full`
            }
          >
            <Tilde size={28} weight="duotone" />
            <span className="pl-3 capitalize text-blackcurrant-300">
              fees Report
            </span>
            <CaretDoubleRight
              size={16}
              color={dashboard_arrow_color}
            ></CaretDoubleRight>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
