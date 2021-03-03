import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="navbar-brand">
                Note App
            </div>

            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link" aria-current="page">Главная</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className="nav-link" aria-current="page">Инфо</NavLink>
                </li>
            </ul>
        </nav>
    )
};


export default NavBar;