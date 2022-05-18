import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import Popup from 'reactjs-popup';

export default function SignInButton() {
  return (
    <div style={{ textAlign: "center" }}>
      <Popup trigger={<a href="#" style={{ color: "black" }} ><AiOutlineUser />Sign In</a>} position="bottom center">
        <div style={{ width: "384px", height: "548px", border: "2px solid", background: "white"}}>
          <div style={{ padding: "20px"}}><h3>Sign in to your Account</h3></div>
          <div style={{padding: "20px"}}><label for="fname">First Name</label><br/>
            <input type="text" id="fname" name="fname"  />
          </div>
          <div style={{padding: "20px"}}>
            <label for="lname">Last Name</label><br/>
            <input type="text" id="lname" name="lname"  />
          </div>
        </div>
      </Popup>

    </div>




  )
}
