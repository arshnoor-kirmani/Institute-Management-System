import React from "react";
import store from "./app/reduxStore/Store";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./components";
import { Weblayout } from "./components";
import "./index.css";
console.clear();
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <div className="w-screen h-screen bg-custom-5">
      <Weblayout></Weblayout>
    </div>
  </Provider>
);
