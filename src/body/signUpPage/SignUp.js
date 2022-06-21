import React, { Component } from "react";
import './SignUp.css'
import pixels from "./images/pexels-mo-10035858(1).jpg"
class ControlledFormComponent extends Component {
    render() {
        return (

            <div>

                <div class="split left">
                    <div class="centred">
                <img src={pixels} alt="Start Page" width="90%"/>
                    </div>
                </div>
                <br />

                <div class="split right">
                    <div class="centred">
                <div className='form'>
                <h3>Create your Account</h3>
                <br />
                <form>
                    <label>Name: </label>
                </form>
                <form>
                    <input type="text" placeholder="" />
                </form>
                <form>
                    <label>Email: </label>
                </form>
                <form>
                    <input type="text" placeholder="" />
                </form>
                <form>
                <label>Password: </label>
                </form>
                <form>
                    <input type="text" placeholder="" />
                </form>

                </div>

                <br />
                <br />
                <div>
                    <p className="btn"><span></span>
                    <button className='buttonReadMore' style={{}}>Read More >></button>
                    <button className='buttonJoinNow' style={{}}>Join now</button>
                    </p>
                </div>
                </div>
                </div>
            </div>


        );
    }
}

export default ControlledFormComponent;