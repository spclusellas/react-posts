import React from 'react'
import './css/Navbar.css'
import { Form, FormControl,Button } from 'react-bootstrap';

function Navbar(){
    return( 
        <div className="navbar-app">
            <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" className="nav-logo"></img>
            <nav>
                <ul className="navbar-list">
                    <li className="nav-item"><a href=""> Home </a></li>
                    <li className="nav-item"><a href="#">FAQ</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar