import React, { Component } from 'react'
// import "../styles/Navabar.css"
export default class NavbarComponent extends Component {
    render() {
        return (
            <div className="sticky-top">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                     <a className="nav-link" href="/home">Home</a> 
                    
                    
                    <div className="collapse navbar-collapse" style={{marginLeft : "880px" }}id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown" style={{marginLeft : "-23px" }} >
                                <a className="nav-link dropdown-toggle"    href="/" id="navbarDropdownMenuLink" role="button"   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Registration
                                </a>
                                
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item"   href="/user-registration">User Registration</a>
                                    
                                </div>
                            </li>
                            <li className="nav-item dropdown" style={{marginLeft : "34px" }}>
                                <a className="nav-link dropdown-toggle"    href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Login
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item"  href="/user-login">User Login</a>
                                    {/* <a className="dropdown-item"  href="/doctor-login">Doctor Login</a> */}
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    
                </nav>
            </div>
        )
    }
}