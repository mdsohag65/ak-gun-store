import React from 'react';
import './Card.css';
import { BsFillCartPlusFill } from 'react-icons/bs';

const Card = (props) => {
    const { img, name, price, action, capacity, bullet } = props.gun;
    return (
        <div className='card'>
            <div className='image-container'>
                <img src={img} alt="" />
            </div>
            <h2>{name}</h2>
            <p>Bullet type: {bullet}</p>
            <p>Capacity: {capacity}</p>
            <p>Action: {action}</p>
            <div className='add-to-cart'>
                <button className='cart-btn'><BsFillCartPlusFill className='icon' /></button>
                <h1>${price}</h1>
            </div>
        </div>
    );
};

export default Card;