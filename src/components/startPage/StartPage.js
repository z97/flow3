import React from 'react'
import './StartPage.css'
import start from "./images/StartPage.png"
import google from "./images/google.png"
import appstore from "./images/appstore.png"
export default function StartPage() {
  return (
    <div style={{width: "100%", marginTop: "-60px"}}>
      <div className="top-left"><h1 className='headerH1'>ReDesign <span style={{"color": "white"}}>precious</span> things!</h1></div>
      <img src={start} alt="Start Page" width="100%" />
      <button className='buttonSignUp'>Sign Up</button>
      <button className='buttonSignUp' style={{top: "1750px", left: "46%"}}>Sign Up</button>
      <img src={google} style={{top: "2600px" ,position: "absolute", right: "50%"}} alt="google play" />
      <img src={appstore} style={{top: "2600px", position: "absolute", left: "50%"}} alt="appstore" />
    </div>
  )
}
