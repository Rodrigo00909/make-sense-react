import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from 'react-router-dom';

import LogoMakeSense from '../../assets/images/LogoMakeSense.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <header className="navbar-header">
            <div className="navbar-container">
                <div className="navbar-center">
                    <div className="navbar-logo">
                        <img className="navbar-logo-img" src={LogoMakeSense} alt="MakeSense" />
                    </div>
                    <div className="navbar-menu">
                        <a>login</a>
                        <a>register</a>
                        <a>menu3</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
