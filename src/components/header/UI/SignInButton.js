import React, { useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { GiPresent } from 'react-icons/gi'
import { BiMessage } from 'react-icons/bi'
import '../../../App.css'
import Popup from 'reactjs-popup';

export default function SignInButton() {
  const [login, setLogin] = useState(false)
  const [userName, setUserName] = useState('')
  return (
    (login == true)
      ? <div style={{ textAlign: "center" }}>
        <Popup trigger={<a href="#" style={{ color: "#B287B6" }} ><AiOutlineUser />{`Hello, ${userName}!`}</a>} position="bottom center">
          <div style={{ width: "231px", height: "301px", border: "1px solid", background: "white", padding: "30px" }}>
            <div><AiOutlineUser className='Popup-icon'/> My profile</div><br />
            <div><GiPresent/></div>
            <div><BiMessage/></div>
          </div>
        </Popup>
        </div>
        : <div style={{ textAlign: "center" }}>
          <Popup trigger={<a href="#" style={{ color: "black" }} ><AiOutlineUser />Sign In</a>} position="bottom center">
            <div style={{ width: "384px", height: "548px", border: "1px solid", background: "white", padding: "30px" }}>
              <div><h3>Sign in to your Account</h3></div><br />
              <div><label >First Name</label><br />
                <input type="text" id="fname" name="fname" />
              </div><br />
              <div>
                <label>Last Name</label><br />
                <input type="text" id="lname" name="lname" />
              </div><br />
              <div>
                <a href='#'>Forgot Password?</a>
              </div>
              <div className="col text-center pt-5">
                <button className="btn btn-default" style={{ color: "white", backgroundColor: "#802882", borderRadius: "20px" }}>
                  Sign In
                </button>
                <hr />
                <button className="btn btn-default" style={{ color: "#6AC9C9", backgroundColor: "white", borderRadius: "20px", border: "solid 1px" }}>
                  Create Account
                </button>
              </div>
            </div>
          </Popup>
        </div>
        )
}
