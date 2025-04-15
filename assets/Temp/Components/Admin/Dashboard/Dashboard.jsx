import {
  Student,
  ChalkboardTeacher,
  Books,
  CurrencyInr,
  Printer,
  DotsThree,
  Devices,
  ClockCountdown,
  ClockClockwise,
  CalendarDots,
  IdentificationBadge,
  XCircle,
  Trash,
  Detective,
  UserFocus,
} from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DATABASE, STORAGE, userAuth } from "../../../app";
import { Query } from "appwrite";
export default function Dashboard() {
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<=== States Variables Start ===>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const [dashboard_icon_size, setDashboard_icon_size] = useState(44);
  const [dashboard_icon_weight, setDashboard_icon_weight] = useState("duotone");
  const [dashboard_icon_color, setDashboard_icon_color] = useState("#352f44");
  const totalInfo = useSelector((state) => state.dashboardSlice.totalInfo);
  const LoginActivetyArr = useSelector(
    (state) => state.dashboardSlice.LoginActivety
  );
  const [pendingStudents, setPendingStudents] = useState([]);
  // DATABASE.studentList()
  //   .then((res) => {
  //     setPendingStudents(res.documents);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<=== States Variables End ===>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<=== Function Start ===>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  function Show_Hide(className) {
    let elm = document.querySelector(`#${className}`);
    elm.classList.toggle("hidden");
  }
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<=== Function End ===>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<=== Return JSX Start ===>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  return (
    // <div className="size-full  border-red-800">
    <div className="p-5 flex flex-col gap-5">
      <div className="border-2 border-blackcurrant-900 grid grid-cols-2 gap-3 p-3 rounded-md">
        <div
          id="totalStudent"
          className="rounded-md p-3 grid grid-cols-[15%_auto] gap-2 bg-blackcurrant-900"
        >
          <div className="rounded bg-blackcurrant-500 flex justify-center items-center">
            <Student
              size={dashboard_icon_size}
              weight={dashboard_icon_weight}
              color={dashboard_icon_color}
            />
          </div>
          <div>
            <span className="text-blackcurrant-300">Student</span>
            <h1 className="text-blackcurrant-50">{totalInfo.TotalStudent}</h1>
          </div>
        </div>
        <div
          id="totalTeacher"
          className="rounded-md p-3 grid grid-cols-[15%_auto] gap-2 bg-blackcurrant-900"
        >
          <div className="rounded bg-blackcurrant-500 flex justify-center items-center">
            <ChalkboardTeacher
              size={dashboard_icon_size}
              weight={dashboard_icon_weight}
              color={dashboard_icon_color}
            />
          </div>
          <div>
            <span className="text-blackcurrant-300">Teacher</span>
            <h1 className="text-blackcurrant-50">{totalInfo.TotalTeacher}</h1>
          </div>
        </div>
        <div
          id="totalCourses"
          className="rounded-md p-3 grid grid-cols-[15%_auto] gap-2 bg-blackcurrant-900"
        >
          <div className="rounded bg-blackcurrant-500 flex justify-center items-center">
            <Books
              size={dashboard_icon_size}
              weight={dashboard_icon_weight}
              color={dashboard_icon_color}
            />
          </div>
          <div>
            <span className="text-blackcurrant-300">Courses</span>
            <h1 className="text-blackcurrant-50">{totalInfo.TotalCourses}</h1>
          </div>
        </div>
        <div
          id="totalPendingFees"
          className="rounded-md p-3 grid grid-cols-[15%_auto] gap-2 bg-blackcurrant-900"
        >
          <div className="rounded bg-blackcurrant-500 flex justify-center items-center">
            <CurrencyInr
              size={dashboard_icon_size}
              weight={dashboard_icon_weight}
              color={dashboard_icon_color}
            />
          </div>
          <div>
            <span className="text-blackcurrant-300">Pending Fees</span>
            <h1 className="text-blackcurrant-50">
              {totalInfo.TotalPendingFees}
            </h1>
          </div>
        </div>
      </div>
      {/*<<<<<<<<<<<<<<<<<<<<<<<<<<===Unpaid Students Section Start===>>>>>>>>>>>>>>>>>>>>>>>>*/}
      <div
        id="unPaidFeesContainer"
        className="bg-blackcurrant-700 rounded-md border-2 border-blackcurrant-900 "
      >
        <div id="title" className="text-blackcurrant-50 p-2">
          <h1>Unpaid Student</h1>
        </div>
        <div id="InfoCatgory" className="w-full h-9 bg-blackcurrant-500 ">
          <ul className="list-none size-full grid grid-cols-[25%_repeat(6,12.5%)] items-center">
            <li className=" text-center">
              <span>Name</span>
            </li>
            <li className=" text-center">
              <span>ID</span>
            </li>
            <li className=" text-center">
              <span>Course</span>
            </li>
            <li className=" text-center">
              <span>Fees</span>
            </li>
            <li className=" text-center">
              <span>Rank</span>
            </li>
            <li className=" text-center">
              <span>Status</span>
            </li>
            <li className=" text-center">
              <span>Action</span>
            </li>
          </ul>
        </div>
        <div id="students">
          {pendingStudents > 0 ? (
            pendingStudents.map((student, index) => (
              <div key={student.$id} className="">
                <ul className="size-full grid grid-cols-[25%_repeat(6,12.5%)] items-center py-1 text-blackcurrant-200">
                  <li className="grid grid-cols-[30%_70%] items-center px-2 pl-8 py-1 hover:scale-101  duration-200 linear cursor-pointer">
                    <img
                      src={student.profile_img_id}
                      alt=""
                      className="size-10 object-cover rounded-full"
                    />
                    {student.full_name}
                  </li>
                  <li className=" text-center py-1"> {student.roll_no}</li>
                  <li className=" text-center py-1"> {student.course}</li>
                  <li className=" text-center py-1"> {student.pending_fees}</li>
                  <li className=" text-center py-1"> {student.gender}</li>
                  <li
                    className={` text-center py-1 ${
                      student.status ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {student.status ? "Active" : "Not Active"}
                  </li>
                  <li>
                    <div className="flex gap-2 items-center justify-center cursor-pointer">
                      <Printer
                        size={dashboard_icon_size - 20}
                        color={dashboard_icon_color}
                        weight={dashboard_icon_weight}
                        className="active:scale-95 duration-200 linear "
                      />
                      <div
                        className="relative"
                        onClick={() => Show_Hide(`ActionOptions${index}`)}
                      >
                        <DotsThree
                          size={dashboard_icon_size - 10}
                          color={dashboard_icon_color}
                          weight={dashboard_icon_weight}
                          className="active:scale-95 duration-200 linear "
                        />
                        <div
                          id={`ActionOptions${index}`}
                          className="ActionOptions absolute size-25 top-8 right-3 rounded-md bg-blackcurrant-900 hidden"
                        >
                          <ul className="size-full grid py-1">
                            <li className="text-center text-sm p-1 grid grid-cols-[50%_20%] items-center gap-4 border-b-1 border-blackcurrant-950">
                              Remove
                              <Trash size={20} color="#0d0c0e" weight="thin" />
                            </li>
                            <li className="text-center text-sm p-1 grid grid-cols-[50%_20%] items-center gap-4 border-b-1 border-blackcurrant-950">
                              {student.status ? "Deactive" : "Active"}
                              <Detective
                                size={20}
                                color="#0d0c0e"
                                weight="thin"
                              />
                            </li>
                            <li className="text-center text-sm p-1 grid grid-cols-[50%_20%] items-center gap-4">
                              Profile
                              <UserFocus
                                size={20}
                                color="#0d0c0e"
                                weight="thin"
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            ))
          ) : (
            <h1>No Unpaid Student</h1>
          )}
        </div>
      </div>
      {/*<<<<<<<<<<<<<<<<<<<<<<<<<<===Unpaid Students Section End===>>>>>>>>>>>>>>>>>>>>>>>>*/}
      {/*<<<<<<<<<<<<<<<<<<<<<<<<<<===Login Activety Section Start===>>>>>>>>>>>>>>>>>>>>>>>>*/}
      <div
        id="LoginActivety"
        className="bg-blackcurrant-700 rounded-md border-2 border-blackcurrant-900 "
      >
        <div id="title" className="text-blackcurrant-50 p-2">
          <h1>Login Activety</h1>
        </div>
        <div id="InfoCatgory" className="w-full h-9 bg-blackcurrant-500 ">
          <ul className="list-none size-full grid grid-cols-[18%_repeat(4,15.5%)_10%_10%] items-center">
            <li className="text-center flex items-center justify-center gap-1">
              <span>Device Name</span>
              <Devices
                size={20}
                color={dashboard_icon_color}
                weight={dashboard_icon_weight}
              />
            </li>
            <li className="text-center flex items-center justify-center gap-1">
              <span>Login Time</span>
              <ClockCountdown
                size={20}
                color={dashboard_icon_color}
                weight={dashboard_icon_weight}
              />
            </li>
            <li className="text-center flex items-center justify-center gap-1">
              <span>Logout Time</span>
              <ClockClockwise
                size={20}
                color={dashboard_icon_color}
                weight={dashboard_icon_weight}
              />
            </li>
            <li className="text-center flex items-center justify-center gap-1">
              <span>Date</span>
              <CalendarDots
                size={20}
                color={dashboard_icon_color}
                weight={dashboard_icon_weight}
              />
            </li>
            <li className="text-center flex items-center justify-center gap-1">
              <span>Username</span>
              <IdentificationBadge
                size={20}
                color={dashboard_icon_color}
                weight={dashboard_icon_weight}
              />
            </li>
            <li className="text-center">
              <span>Status</span>
            </li>
            <li className="text-center">
              <span>Action</span>
            </li>
          </ul>
        </div>
        {LoginActivetyArr.map((res) => (
          <div className="" key={Math.random()}>
            <ul className="size-full grid grid-cols-[18%_repeat(4,15.5%)_10%_10%] items-center py-1 text-blackcurrant-200">
              <li className="flex items-center cursor-pointer justify-center">
                {res.DeviceName}
              </li>
              <li className=" text-center py-1">{res.LoginTime}</li>
              <li className=" text-center py-1">{res.LogoutTime}</li>
              <li className=" text-center py-1">{res.Date}</li>
              <li className=" text-center py-1">{res.Username}</li>
              <li
                className={` text-center py-1 ${
                  res.Status ? "text-green-400" : "text-red-400"
                }`}
              >
                {res.Status ? "Active" : "Not Active"}
              </li>
              <li>
                <div className="flex gap-2 items-center justify-center cursor-pointer">
                  <div>
                    <DotsThree
                      size={dashboard_icon_size - 10}
                      color={dashboard_icon_color}
                      weight={dashboard_icon_weight}
                      className="active:scale-95 duration-200 linear "
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        ))}
      </div>
      {/*<<<<<<<<<<<<<<<<<<<<<<<<<<===Unpaid Students Section End===>>>>>>>>>>>>>>>>>>>>>>>>*/}
    </div>

    // </div>
  );
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<=== Return JSX End ===>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
}
