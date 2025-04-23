import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css";

function Header() {
  return (
    <header className= 'header w1240 flex'>
        <nav className='header-navbar'>
            <NavLink to="/">
                <div>
                    <img className='header-navbar-logo' src="../logo-desktop.png" alt="logo de kasa orange" />
                </div>
            </NavLink>
            <ul className='header-navbar-ul'>
                <li>
                    <NavLink to="/">
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about">
                        A Propos
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;