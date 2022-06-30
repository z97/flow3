import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import SignUp from "./body/signUpPage/SignUp";
import PayMent from "./body/payMent/PayMent"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
      {/*<SignUp/>*/}
      
      {/* <PayMent/> */}
  </BrowserRouter>
);
