import React from 'react';
import img from '../secondPage/images/untitled.182.jpg'
const SmallItem = (props) => {
    return (
        <div className="container">
            <div className="description">
                <div className="name">{props.name}</div>
                <div className="material">{props.material}</div>
                <div className="price">{props.price}</div>
            </div>
        </div>

    );
};

export default SmallItem;