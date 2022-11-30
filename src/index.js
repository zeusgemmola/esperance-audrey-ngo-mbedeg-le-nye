import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import Page404 from "./components/pages/Page404";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="*" element={<Page404 />} />
    </Routes>
  </BrowserRouter>,

  document.getElementById("root")
);
