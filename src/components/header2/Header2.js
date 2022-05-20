import React from 'react'
import pixels from './Images/page2/1.jpg'
import pixels2 from './Images/page2/2.png'
import pixels3 from './Images/page2/Rectangle 87.png'
import pixels4 from './Images/page2/Rectangle 115.png'
import './Header2.css'

export default function Header2(){
    return(
        <div className="container1" style={{top: "234px",
            left: "0px",
            width: "50%",
            height: "1034.64px"}}>
            <img src={pixels} alt="1" width="100%" height="1000" align="center"/>

            <div className="container2" style={{top: "-400px",
                left: "-7px",
                width: "100%",
                height: "410px"}}>
                <img src={pixels2} alt="2" width="102%" height="410px" align="center" />
            </div>,

            <div className="container3" style={{ top: "700px",
                left: "2000px",
                width: "532px",
                height: "0px",
                marginBottom: "100px",

                transform: (0.99, 0.16, -0.16, 0.99, 0, 0)}}>

                <img src={pixels3} alt="3" width="300" height="200" align="right" />
            </div>,

            <div className="container4" style={{top: "700px",
                right: "1000px",
                width: "532px",
                height: "0px",
                marginBottom: "100px",

                transform: (0.99, 0.16, -0.16, 0.99, 0, 0)}}>

                <img src={pixels4} alt="4" width="300" height="200" align="right"  />



            </div>
        </div>
    )
}

