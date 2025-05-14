import React, { useEffect, useState } from "react";
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
  Trash,
  Detective,
  UserFocus,
} from "@phosphor-icons/react";
import { database, setPendingStudent, STORAGE, userAuth } from "../../../app";
import { useDispatch, useSelector } from "react-redux";
import { Query } from "appwrite";
export default function Dashboard() {
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const [dashboard_icon_size, setDashboard_icon_size] = useState(44);
  const [dashboard_icon_weight, setDashboard_icon_weight] = useState("duotone");
  const [dashboard_icon_color, setDashboard_icon_color] = useState("#352f44");
  const [totalInfo, setTotalInfo] = useState({
    TotalStudent: 9600,
    TotalTeacher: 10,
    TotalCourses: 20,
    TotalPendingFees: 36054,
  });
  const [logingActivty, setLogingActivty] = useState([
    {
      DeviceName: "Windows",
      LoginTime: "10:31 AM",
      LogoutTime: "10:49 AM",
      Date: "12/01/2025",
      Username: "Arshnoor",
      Status: false,
    },
    {
      DeviceName: "Windows",
      LoginTime: "09:26 AM",
      LogoutTime: "10:49 AM",
      Date: "13/01/2025",
      Username: "Sarfaraz",
      Status: true,
    },
  ]);
  const [pendingStudents, setPendingStudents] = useState([]);
  const [imageSrc, setImageSrc] = useState("#");
  const dispatch = useDispatch();
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  function getImageSrc(id) {
    STORAGE.getFileView(id).then((res) => {
      setImageSrc(res);
    });
  }
  function getDateTime(date) {
    var currentdate = new Date(date);
    var datetime = [
      (currentdate.getDate() > 9
        ? currentdate.getDate()
        : "0" + currentdate.getDate()) +
        "/" +
        (currentdate.getMonth() > 9
          ? currentdate.getMonth() + 1
          : "0" + (currentdate.getMonth() + 1)) +
        "/" +
        currentdate.getFullYear(),

      (currentdate.getHours() > 9
        ? currentdate.getHours()
        : "0" + currentdate.getHours()) +
        ":" +
        (currentdate.getMinutes() > 9
          ? currentdate.getMinutes()
          : "0" + currentdate.getMinutes()) +
        ":" +
        (currentdate.getSeconds() > 9
          ? currentdate.getSeconds()
          : "0" + currentdate.getSeconds()),
    ];
    return datetime;
  }
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  useEffect(() => {
    // Fetching data from Appwrite Database
    database
      .StudentLists([Query.greaterThan("pending_fees", 0)])
      .then((students) => {
        if (students) {
          setPendingStudents(students.documents);
          dispatch(setPendingStudent(students.documents));
        }
      });
    // userAuth.loginUser("arhnoorkirmani@gmail.com", "test1234");
    userAuth.getLoginList([Query.limit(10)]).then((res) => {
      if (res) {
        setLogingActivty(res.sessions);
      }
    });
  }, []);
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  return (
    <div className="p-5 flex flex-col gap-5">
      <div className="border-2 border-blackcurrant-900 grid grid-cols-2 gap-3 p-3 rounded-md">
        <div
          id="totalStudent"
          className="rounded-md p-3 grid grid-cols-[15%_auto] gap-2 bg-blackcurrant-900"
        >
          <div className="rounded bg-blackcurrant-500 flex justify-center items-center">
            <Student
              size={dashboard_icon_size || 44}
              weight={dashboard_icon_weight || "duotone"}
              color={dashboard_icon_color || "#352f44"}
            />
          </div>
          <div>
            <span className="text-blackcurrant-300">Student</span>
            <h1 className="text-blackcurrant-50">
              {totalInfo.TotalStudent || 0}
            </h1>
          </div>
        </div>
        <div
          id="totalTeacher"
          className="rounded-md p-3 grid grid-cols-[15%_auto] gap-2 bg-blackcurrant-900"
        >
          <div className="rounded bg-blackcurrant-500 flex justify-center items-center">
            <ChalkboardTeacher
              size={dashboard_icon_size || 44}
              weight={dashboard_icon_weight || "duotone"}
              color={dashboard_icon_color || "#352f44"}
            />
          </div>
          <div>
            <span className="text-blackcurrant-300">Teacher</span>
            <h1 className="text-blackcurrant-50">
              {totalInfo.TotalTeacher || 0}
            </h1>
          </div>
        </div>
        <div
          id="totalCourses"
          className="rounded-md p-3 grid grid-cols-[15%_auto] gap-2 bg-blackcurrant-900"
        >
          <div className="rounded bg-blackcurrant-500 flex justify-center items-center">
            <Books
              size={dashboard_icon_size || 44}
              weight={dashboard_icon_weight || "duotone"}
              color={dashboard_icon_color || "#352f44"}
            />
          </div>
          <div>
            <span className="text-blackcurrant-300">Courses</span>
            <h1 className="text-blackcurrant-50">
              {totalInfo.TotalCourses || 0}
            </h1>
          </div>
        </div>
        <div
          id="totalPendingFees"
          className="rounded-md p-3 grid grid-cols-[15%_auto] gap-2 bg-blackcurrant-900"
        >
          <div className="rounded bg-blackcurrant-500 flex justify-center items-center">
            <CurrencyInr
              size={dashboard_icon_size || 44}
              weight={dashboard_icon_weight || "duotone"}
              color={dashboard_icon_color || "#352f44"}
            />
          </div>
          <div>
            <span className="text-blackcurrant-300">Pending Fees</span>
            <h1 className="text-blackcurrant-50">
              {totalInfo.TotalPendingFees || 0}
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
          {pendingStudents.length > 0 ? (
            pendingStudents?.map((student, index) => (
              <div key={student.$id} className="">
                <ul className="size-full grid grid-cols-[25%_repeat(6,12.5%)] items-center py-1 text-blackcurrant-200">
                  <li className="grid grid-cols-[30%_70%] items-center px-2 pl-8 py-1 hover:scale-101  duration-200 linear cursor-pointer">
                    <img
                      src={imageSrc}
                      alt=""
                      className="size-10 object-cover rounded-full"
                      onError={() => {
                        getImageSrc(student.profile_img_id);
                      }}
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
                        size={(dashboard_icon_size || 44) - 20}
                        color={dashboard_icon_color || "#352f44"}
                        weight={dashboard_icon_weight || "duotone"}
                        className="active:scale-95 duration-200 linear "
                      />
                      <div
                        className="relative"
                        onClick={() => Show_Hide(`ActionOptions${index}`)}
                      >
                        <DotsThree
                          size={(dashboard_icon_size || 44) - 10}
                          color={dashboard_icon_color || "#352f44"}
                          weight={dashboard_icon_weight || "duotone"}
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
                color={dashboard_icon_color || "#352f44"}
                weight={dashboard_icon_weight || "duotone"}
              />
            </li>
            <li className="text-center flex items-center justify-center gap-1">
              <span>Login Time</span>
              <ClockCountdown
                size={20}
                color={dashboard_icon_color || "#352f44"}
                weight={dashboard_icon_weight || "duotone"}
              />
            </li>
            <li className="text-center flex items-center justify-center gap-1">
              <span>Logout Time</span>
              <ClockClockwise
                size={20}
                color={dashboard_icon_color || "#352f44"}
                weight={dashboard_icon_weight || "duotone"}
              />
            </li>
            <li className="text-center flex items-center justify-center gap-1">
              <span>Date</span>
              <CalendarDots
                size={20}
                color={dashboard_icon_color || "#352f44"}
                weight={dashboard_icon_weight || "duotone"}
              />
            </li>
            <li className="text-center flex items-center justify-center gap-1">
              <span>Username</span>
              <IdentificationBadge
                size={20}
                color={dashboard_icon_color || "#352f44"}
                weight={dashboard_icon_weight || "duotone"}
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
        {logingActivty?.map((res) => (
          <div className="" key={Math.random()}>
            <ul className="size-full grid grid-cols-[18%_repeat(4,15.5%)_10%_10%] items-center py-1 text-blackcurrant-200">
              <li className="flex items-center cursor-pointer justify-center">
                {res.osName} ({res.deviceName})
              </li>
              <li className=" text-center py-1">
                {getDateTime(res.$updatedAt)[1]}
              </li>
              <li className=" text-center py-1">{res.LogoutTime || "-"}</li>
              <li className=" text-center py-1">
                {getDateTime(res.$updatedAt)[0]}
              </li>
              <li className=" text-center py-1">{res.clientName}</li>
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
                      size={(dashboard_icon_size || 44) - 10}
                      color={dashboard_icon_color || "#352f44"}
                      weight={dashboard_icon_weight || "duotone"}
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
  );
}
