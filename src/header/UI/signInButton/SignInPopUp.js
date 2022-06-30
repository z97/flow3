import React from 'react'
import { useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { GiPresent } from 'react-icons/gi'
import { BiMessage } from 'react-icons/bi'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { BsFillGearFill } from 'react-icons/bs'
import Popup from 'reactjs-popup';
export default function SignInPopUp() {
    const [userName, setUserName] = useState('')
    return (
        <div style={{ textAlign: "center" }}>
            <Popup trigger={<a href="#" style={{ color: "#B287B6" }} ><AiOutlineUser />{`Hello, ${userName}!`}</a>} position="bottom center">
                <div style={{ width: "231px", height: "301px", border: "1px solid", background: "white", padding: "30px" }}>
                    <div><p><AiOutlineUser className='Popup-icon' color='#b287b6' size="20px" /> My profile</p></div>
                    <div><h4><GiPresent /></h4></div>
                    <div><h4><BiMessage /></h4></div>
                    <div><h4><MdOutlineShoppingCart /></h4></div>
                    <div><h4><BsFillGearFill /></h4></div>
                    <hr></hr>
                    <div style={{ textAlign: "center" }}>
                        <button className="btn btn-default" style={{ color: "white", backgroundColor: "#6AC9C9", borderRadius: "20px", border: "solid 1px" }}>
                            Start to sell
                        </button>
                    </div>
                </div>
            </Popup>
        </div>
    )
}
