import React from 'react'
import image from '../images/items/1.jpg';

export default function SmallItem({title, description, price}) {
    return (
        <div className="card text-white" style={{ width: "250px", height: "350px", borderRadius: "20px", margin: "20px"}}>
            <img src={image} style={{ "objectFit": "cover", height: "350px", borderRadius: "20px" }} className="card-img" alt="..." />
            <div className="card-img-overlay">
                <h3 className="card-title" style={{ paddingTop: "200px" }}>{title}</h3>
                <p className="card-text">{description}
                    <span style={{ right: 0, color: 'black', float: "right" }}>{price}</span></p>
            </div>
        </div>
    )
}
