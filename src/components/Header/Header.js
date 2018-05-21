import React from 'react';
import './Header.css';

const Header = ({ openCart, logo }) => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="logo"/>

            <div className="button-container">
                <button type="button">Login</button>
                <button onClick={openCart} type="button">CART</button>
            </div>
        </div>
    );
}

export default Header;