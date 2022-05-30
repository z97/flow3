import React from 'react'
import './SmallItems.css'
import SmallItem from '../smallItem/SmallItem'
import data from './data.json'

export default function SmallItems() {
    let smallItems = [];
    let items = data;
    for (var i = 0; i < items.length; i++) {
        smallItems.push(<SmallItem
            key={i}
            title={items[i].title}
            description={items[i].description}
            price={items[i].price}
        />);
    }
    return (
        <div className='SmallItems'>
            {smallItems}
        </div>
    )
}
