import React, { Component } from "react";
import './SignUp.css'
import pixels from "./images/pexels-mo-10035858.jpg"
class ControlledFormComponent extends Component {
    render() {
        return (
            <div>

                <img src={pixels} alt="Start Page" width="25%"/>

                <br />
                <div className='form'>
                <h3>Create your Account</h3>
                <br />
                <form>
                    <label>Name2: </label>
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
                    <button className='buttonReadMore' style={{}}>Read More >></button>
                    <button className='buttonJoinNow' style={{}}>Join now</button>
                </div>
            </div>


        );
    }
}

export default ControlledFormComponent;