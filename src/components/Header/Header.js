import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import brandImage from '../../images/hungry monster brand icon and logo.jpg';

const Header = () => {
    return (
        <nav  className="navbar navbar-expand-lg navbar bg-transparent">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home"> <img src={brandImage} width="30" height="30" className="d-inline-block align-text-top" alt="" /> <span id="brand-name">Hungry Monster</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link route-name" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link route-name" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link route-name" to="/recipes">Recipes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link route-name" to="/blog">Blog</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;