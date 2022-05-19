import React, { useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import Popup from 'reactjs-popup';

export default function SignInButton() {
  const [login, setLogin] = useState(false)
  const [userName, setUserName] = useState('')

  return (
    <div style={{ textAlign: "center" }}>
      <Popup trigger={<a href="#" style={login ? { color: "#B287B6" } : { color: "black" }} ><AiOutlineUser />{login ? `Hello, ${userName}!` : `Sign In`}</a>} position="bottom center">


          <div style={{ width: "384px", height: "548px", border: "1px solid", background: "white", padding: "30px" }}>
            <div><h3>Sign in to your Account</h3></div><br />
            <div><label for="fname">First Name</label><br />
              <input type="text" id="fname" name="fname" />
            </div><br />
            <div>
              <label for="lname">Last Name</label><br />
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
