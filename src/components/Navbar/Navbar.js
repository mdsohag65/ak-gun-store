import React from 'react';
import './Navbar.css';
import { BsFillCartPlusFill } from 'react-icons/bs';

const Navbar = ({ openModal, cart }) => {
    return (
        <div className='navbar'>
            <h1>AK Gun Store</h1>
            <div className='cart-counter' onClick={openModal}>
                <span>{cart.length}</span>
                <BsFillCartPlusFill className='icon' color='#fff' />
            </div>
        </div>
    );
};

export default Navbar;