import React from 'react';
import "./Navbar.css"

function Navbar() {
  return (
    <nav className='home-navbar'>
        <div>
            <img className='home-navbar-logo' src="logo-desktop.png" alt="logo du site kasa orange" />
        </div>
        <ul className='home-navbar-ul'>
            <a href="">
                <li>Accueil</li>
            </a>
            <a href="">
                <li>A Propos</li>
            </a>
        </ul>
    </nav>
  )
}

export default Navbar