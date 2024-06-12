import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/alltagswissen">Alltagswissen</Link></li>
                    <li><Link to="/periode">Periode</Link></li>
                    <li><Link to="/kontakt">Kontakt</Link></li>
                    <li><Link to="/forum">Forum</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;