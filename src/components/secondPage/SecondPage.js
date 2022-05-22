import React from 'react'
import './SecondPage.css'
import first from "./images/2xStones_01.143.jpg"
import second from "./images/1_Stein_Ring.163.jpg"
import third from "./images/3_Stone_RIng.150.jpg"
import fourth from "./images/4xStones_01.136.jpg"
import fifth from "./images/Cabochon_Fassungs.154.jpg"
import sixth from "./images/Cabochon_Fassungs.159.jpg"
import seventh from "./images/Cabochon_Fassungs.162.jpg"
import eighth from "./images/untitled.182.jpg"
export default function SecondPage(){
    return (
        <div style={{width: "50%", marginTop: "-10%"}}>
            <div className="first">
        <img src={first} style={{top: "300px", position: "absolute", left: "700px", width: "10%"}} alt="first"/>
            </div>,
            <div className="second">
            <img src={second} style={{top: "500px", position: "absolute", left: "700px", width: "10%"}} alt="first"/>

            </div>,
            <div className="third">
            <img src={third} style={{top: "500px", position: "absolute", left: "100px", width: "10%"}} alt="first"/>
            </div>,
            <div className="fourth">
            <img src={fourth} style={{top: "300px", position: "absolute", left: "500px", width: "10%"}} alt="first"/>
            </div>,
            <div className="fifth">
            <img src={fifth} style={{top: "500px", position: "absolute", left: "300px", width: "10%"}} alt="first"/>
            </div>,
            <div className="sixth">
            <img src={sixth} style={{top: "500px", position: "absolute", left: "500px", width: "10%"}} alt="first"/>
            </div>,
            <div className="seventh">
            <img src={seventh} style={{top: "300px", position: "absolute", left: "100px", width: "10%"}} alt="first"/>
            </div>,
            <div className="eighth">
            <img src={eighth} style={{top: "300px", position: "absolute", left: "300px", width: "10%"}} alt="first"/>
            </div>
        </div>

    )
}