import React from "react";
import background from "../images/StartPage.png";
import { Link } from "react-router-dom";
import homeStyles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={homeStyles.Home}>
      <img src={background} alt="background" />
      <Link to={"/signUpPage"}>Sign Up</Link>
    </div>
  );
}
