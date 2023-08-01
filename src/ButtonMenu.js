import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ButtonMenu.css';

const ButtonMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="button-menu-container">
            <button onClick={toggleMenu}>Open Menu</button>
            {isMenuOpen && (
                <div className="menu-container">
                    <ul>
                        <li><Link to="/page1">Menu Item 1</Link></li>
                        <li><Link to="/page2">Menu Item 2</Link></li>
                        {/* Add more menu items as needed */}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ButtonMenu;
