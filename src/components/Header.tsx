// src/components/Header.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
    const location = useLocation(); //Hook to get the current location
    return (
        <header>
            <nav>
                <ul>
                    <li className={location.pathname === '/' ? 'active-link' : ''}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={location.pathname === '/knowledge' ? 'active-link' : ''}>
                        <Link to="/knowledge">Knowledge</Link>
                    </li>
                    <li className={location.pathname === '/support' ? 'active-link' : ''}>
                        <Link to="/support">Support offers</Link>
                    </li>
                    <li className={location.pathname === '/downloads' ? 'active-link' : ''}>
                        <Link to="/downloads">Downloads</Link>
                    </li>
                    <li className={location.pathname === '/contact' ? 'active-link' : ''}>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;