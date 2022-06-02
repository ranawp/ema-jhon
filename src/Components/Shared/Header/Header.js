import React from 'react';
import '../Header/Header.css'
import logo from '../../../assets/images/Logo.svg'

const Header = () => {
    return (
        <div className='navbar_bg'>
            <div className='navbar'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <nav>
                        <a href="/shop">Shop</a>
                        <a href="/review">Order Review</a>
                        <a href="/inventories">Manage Inventory</a>
                        <a href="/login">Login</a>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;