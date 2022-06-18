import React from 'react'
import './StartPage.css'
import start from "./images/StartPage.png"
import google from "./images/google.png"
import appstore from "./images/appstore.png"
export default function StartPage() {
  return (
    <div>
      <img src={start} alt="Start Page" width="100%" />
      <div className="top-left"><h1 className='headerH1'>ReDesign <span style={{ "color": "white" }}>precious</span> things!</h1></div>
        <div className="top-right"><h1 className='headerH1'><a href="#"><span style={{ "color": "black"}}>TO THE SHOP >></span></a> </h1></div>
      <div style={{ position: "relative", width: "fit-content", bottom: "1900px", left: "250px"}}>
      <button className='buttonSignUp' style={{}}>Sign Up</button>
      </div>
      <div style={{ position: "relative", margin: "0 auto", width: "fit-content", bottom: "1100px" }}>
        <button className='buttonSignUp' >Sign Up</button>
      </div>
      <div style={{ position: "relative", margin: "auto", top: "-263px", width: "fit-content" }}>
        <img src={google} alt="google play" />
        <img src={appstore} alt="appstore" />
      </div>

    </div>

  )
}
