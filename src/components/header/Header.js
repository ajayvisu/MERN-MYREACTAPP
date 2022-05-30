import React from "react";
import '../header/Header.css';

function Header() {
    return (
        <div className="Logo">
            yourCart.com
            
            <div className="menu">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Products</li>
                    <li>Cart</li>
                    <li>Contact</li>
                </ul>
            </div>               
        </div>        
    );
}

export default Header;