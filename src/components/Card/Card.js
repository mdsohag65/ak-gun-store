import React from 'react';
import './Card.css';
import { BsFillCartPlusFill } from 'react-icons/bs';

const Card = (props) => {
    const { handleAddToCart, gun } = props;
    const { img, name, price, action, capacity, bullet } = gun;


    return (
        <div className='card'>
            <div className='image-container'>
                <img src={img} alt="" />
            </div>
            <div className='gun-info'>
                <h2>{name}</h2>
                <p>Bullet type: {bullet}</p>
                <p>Capacity: {capacity}</p>
                <p>Action: {action}</p>
            </div>
            <div className='add-to-cart'>
                <button
                    onClick={() => handleAddToCart(gun)}
                    className='cart-btn'><BsFillCartPlusFill className='icon' /></button>
                <h1>${price}</h1>
            </div>
        </div>
    );
};

export default Card;