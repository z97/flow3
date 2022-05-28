import React from 'react'
import image from '../images/items/1.jpg';

export default function SmallItem() {
    return (
        <div class="card text-white" style={{ width: "250px", height: "350px", borderRadius: "20px" }}>
            <img src={image} style={{ "object-fit": "cover", height: "350px", borderRadius: "20px" }} class="card-img" alt="..." />
            <div class="card-img-overlay">
                <h3 class="card-title" style={{ paddingTop: "200px" }}>Card title</h3>
                <p class="card-text">This is a wider chfghnbgfnh
                    <span style={{ right: 0, color: 'black', float: "right" }}><h3>200$</h3></span></p>
            </div>
        </div>
    )
}
