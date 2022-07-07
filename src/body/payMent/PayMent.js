import React, { Component } from "react";
import index from "./images/index.png"
import "./PayMent.css"
class ControlledFormComponent extends Component {



    render(){
        return (

            <div>

                <div className="split left">
                    <div className="centred">

                        <h2>Billing Info</h2>
                        <br />
                        <form>
                            <label>FULL NAME</label>
                        </form>
                        <form>
                            <input type="text" placeholder="Jane Johnson" />
                        </form>
                        <br/>
                        <form>
                            <label>ADDRESS</label>
                        </form>
                        <form>
                            <input type="text" placeholder="497 Evergreen Rd." />
                        </form>
                        <br/>
                        <form>
                            <label>CITY</label>
                            <label>ZIP CODE</label>


                        </form>
                        <form>
                            <input type="text" placeholder="Roserville" />

                            <input type="text" placeholder="95673" />
                        </form>
                        <br/>
                        <form>
                            <label>COUNTRY</label>
                        </form>
                        <form>
                            <input type="text" placeholder="Israel" />
                        </form>
                    </div>
                </div>
                <div2 className="split right">
                    <div className="centred">
                        <div className='form'>
                            <h2>Credit Card Info</h2>
                            <br/>
                            <form>
                                <label>CARD NUMBERS</label>
                            </form>
                            <form>
                                <input type="text" placeholder="1234 5678 3456 2456" />
                                <img src={index} alt="Pay Ment" width="10%"/>
                            </form>
                            <br />
                            <form>
                                <label>CARDHOLDER NAME</label>
                            </form>

                            <form>
                                <input type="text" placeholder="Jane Johnson" />
                            </form>
                            <br />
                            <form>
                                <label>EXPIRE DATE</label>
                            </form>
                            <form>
                                <input type="text" placeholder="Jane Johnston" />
                            </form>
                            <br />
                            <form>
                                <label>CVV</label>
                            </form>
                            <form>
                                <input type="text" placeholder="123" />
                            </form>

<br/>


                        </div>
                        <div>
                            <p className="btn"><span></span>
                                <button className='buttonNext' style={{}}>-></button>
                            </p>
                        </div>
                    </div>
                </div2>
            </div>
        );
    }
}

export default ControlledFormComponent;