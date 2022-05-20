import React from 'react'
import pixels from './Images/page2/1.jpg'
import pixels2 from './Images/page2/2.png'
import pixels3 from './Images/page2/Rectangle 87.png'
import pixels4 from './Images/page2/Rectangle 115.png'
//import './Header2.css'

export default function Header2(){
    return(
        <div className="container1" style={{top: "234px",
            left: "0px",
            width: "100%",
            height: "1034.64px"}}>
            <img src={pixels} alt="1" width="100%" height="1000" align="center"  />

            <div className="container2" style={{top: "1077px",
                left: "0px",
                width: "100%",
                height: "843px"}}>
                <img src={pixels2} alt="2" width="100%" height="500" align="center"  />
            </div>

            <div className="container3" style={{ top: "800px",
                left: "209px",
                width: "395px",
                height: "0px",
                transform: (0.97, -0.24, 0.24, 0.97, 0, 0)}}>

                <img src={pixels3} alt="2" width="300" height="200" align="center"  />
            </div>

            <div className="container4" style={{top: "700px",
                left: "1283px",
                width: "532px",
                height: "0px",
                transform: (0.99, 0.16, -0.16, 0.99, 0, 0)}}>

                <img src={pixels4} alt="2" width="300" height="200" align="center"  />
            </div>
        </div>
    )
}

