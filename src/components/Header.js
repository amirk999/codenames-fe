import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Codenames</Link>
                <div className="d-flex">
                    <Link to="/games/new" className="nav-link">Create Game</Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;