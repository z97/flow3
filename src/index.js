import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import PayPallButton from "./body/payMent/PayPallButton";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/signUpPage" element={<SignUpPage />} />
      <Route path="/noPage" element={<NoPage />} />
      <Route path="/layout" element={<Layout />} />
      <Route path="/payPallButton" element={<PayPallButton />} />
    </Routes>
  </BrowserRouter>
);
