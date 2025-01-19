import React from 'react';
import Link from 'react-router-dom'

function NavBar() {

    return (
        <nav>
            <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/info">INFO</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
            <li><Link to="/login">LOGIN</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;