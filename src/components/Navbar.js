import React from 'react'
import './css/Navbar.css'

function Navbar(){
    return( 
        <div className="navbar-app">
            <a href="" className="logo-link">
                <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" className="nav-logo"></img>
            </a>
            <nav>
                <ul className="navbar-list">
                    <li className="nav-item"><a href="#"> Go Up </a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar