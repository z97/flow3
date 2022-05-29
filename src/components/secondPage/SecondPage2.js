import React from 'react'
import './SecondPage2.css'
import first from "./images/2xStones_01.143.jpg"
import second from "./images/1_Stein_Ring.163.jpg"
import third from "./images/3_Stone_RIng.150.jpg"
import fourth from "./images/4xStones_01.136.jpg"
import fifth from "./images/Cabochon_Fassungs.154.jpg"
import sixth from "./images/Cabochon_Fassungs.159.jpg"
import seventh from "./images/Cabochon_Fassungs.162.jpg"
import eighth from "./images/untitled.182.jpg"
export default function SecondPage2(){
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                    <div className="card">
                        <img src={seventh} alt="first"/>

                            <div className="card-img-overlay d-flex flex-column justify-content-bottom">
                                <h4 className="card-title">Earrings</h4>
                                <p className="card-text">Gold, brilliant</p>
                                <div className="1">
                                    <a href="#" className="card-link text-black"><b>$700</b></a>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                    <div className="card">
                        <img src={eighth} alt="first"/>
                        <div className="card-img-overlay d-flex flex-column justify-content-bottom">
                            <h4 className="card-title">Friendship Ring</h4>
                            <p className="card-text">Silver, Gold platted, rose Turmaline</p>
                            <div className="link d-flex">
                                <a href="#" className="card-link text-black"><b>$230</b></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                    <div className="card">
                        <img src={fourth} alt="first"/>
                        <div className="card-img-overlay d-flex flex-column justify-content-bottom">
                            <h4 className="card-title">4 Stones Earrings</h4>
                            <p className="card-text">Gold, colored glass stones</p>
                            <div className="link d-flex">
                                <a href="#" className="card-link text-black"><b>$550</b></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                    <div className="card">
                        <img src={first} alt="first"/>
                        <div className="card-img-overlay d-flex flex-column justify-content-bottom">
                            <h4 className="card-title">2 Stones Earrings</h4>
                            <p className="card-text">Gold, colored glass stones</p>
                            <div className="link d-flex">
                                <a href="#" className="card-link text-black"><b>$450</b></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                    <div className="card">
                        <img src={third} alt="first"/>
                        <div className="card-img-overlay d-flex flex-column justify-content-bottom">
                            <h4 className="card-title">3 Stones Ring</h4>
                            <p className="card-text">Gold, Granat stone</p>
                            <div className="link d-flex">
                                <a href="#" className="card-link text-black"><b>$450</b></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                    <div className="card">
                        <img src={fifth} alt="first"/>
                        <div className="card-img-overlay d-flex flex-column justify-content-bottom">
                            <h4 className="card-title">Spiral Earrings</h4>
                            <p className="card-text">Silver, Gold platted</p>
                            <div className="link d-flex">
                                <a href="#" className="card-link text-black"><b>$130</b></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                    <div className="card">
                        <img src={sixth} alt="first"/>
                        <div className="card-img-overlay d-flex flex-column justify-content-bottom">
                            <h4 className="card-title">Earrings</h4>
                            <p className="card-text">Gold, Aquamarine</p>
                            <div className="link d-flex">
                                <a href="#" className="card-link text-black"><b>$850</b></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                    <div className="card">
                        <img src={second} alt="first"/>
                        <div className="card-img-overlay d-flex flex-column justify-content-bottom">
                            <h4 className="card-title">Friendship Ring</h4>
                            <p className="card-text" >Gold, brilliant</p>
                            <div className="link d-flex">
                                <a href="#" className="card-link text-black"><b>$530</b></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}