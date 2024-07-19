import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const handleLinkClick = (event) => {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(nav => nav.classList.remove('active'));
        event.target.classList.add('active');
    };

    return (
        <header>
            <nav className="navbar">
                <ul className="nav-menu">
                    <li className="nav-item" onMouseOver={handleLinkClick}><Link to="/skills" className="nav-link">Skills</Link></li>
                    <li className="nav-item"><Link to="/projects" className="nav-link" onMouseOver={handleLinkClick}>Projects</Link></li>
                    <li className="nav-item"><Link to="/contact" className="nav-link" onMouseOver={handleLinkClick}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
