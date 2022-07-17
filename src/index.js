import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import SignUp from "./body/signUpPage/SignUp";
import SignUpPage from "./pages/SignUpPage"
import PayMent from "./body/payMent/PayMent"
import PayPallButton from "./body/payMent/PayPallButton"
import Home from "./pages/Home"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/*<App />*/}
    <Home/>
      {/*<SignUpPage/>*/}
      {/*<PayPallButton/>*/}
      {/*<PayMent/>*/}
  </BrowserRouter>
);
