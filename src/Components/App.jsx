import React from "react";
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Admin";
import {
  Dashboard,
  Profile,
  SiteSetting,
  Students,
  Teachers,
  Exams,
  MangerUser,
  Courses,
  Marksheet_Cartificates,
  FeesReport,
} from "./Admin";
import NotFound from "./NotFound/NotFound";
export default function App() {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/siteSetting" element={<SiteSetting />} />
          <Route path="/students" element={<Students />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/exam" element={<Exams />} />
          <Route path="mangeruser" element={<MangerUser />} />
          <Route path="courses" element={<Courses />} />
          <Route path="marksheet" element={<Marksheet_Cartificates />} />
          <Route path="feesReport" element={<FeesReport />} />
        </Route>
        <Route path="*" exact={true} element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
