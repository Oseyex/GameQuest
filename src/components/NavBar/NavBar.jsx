import React from 'react';
import {Link} from 'react-router-dom'
import './navbar.css'

function NavBar() {
    return (
            <nav>
                <ul className="navbar">
                    <li className="nav-item"><Link to="/">home</Link></li>
                    <li className="nav-item"><Link to="/login">login</Link></li>
                    <li className="nav-item"><Link to="/contact">contact</Link></li>
                    <li className="nav-item"><Link to="/about-us">about us</Link></li>
                </ul>
            </nav>
    );
}
export default NavBar;