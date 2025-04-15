import React from "react";
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { About, AdminLayout, Home, Weblayout } from "./index";
export default function App() {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="/" element={<Weblayout />}>
          <Route path="/home" element={<h1>Home Page</h1>} />
          <Route path="/about" element={<h1>About Page</h1>} />
        </Route>
        <Route path="*" exact={true} element={<h1>Not Found</h1>} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
