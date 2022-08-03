import React from 'react'
import Header from '../header/Header'
import background from './images/StartPage.png'
import {Button} from "react-bootstrap";
export default function Home() {
    return (
       < div style={{display: 'flex',  justifyContent:'center', alignItems:'center',  color: 'whitesmoke'}}>
            <img src={background} alt="image" />
            <Button>
                <a href='./SignUpPage'>
                    Sign Up
                </a>
            </Button>
        </div>


    )
}

