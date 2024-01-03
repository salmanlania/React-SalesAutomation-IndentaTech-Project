import React from 'react'

// Images
import profile from './images/profile.png'

// CSS
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div>
            {/* <<<<<<<<<<<<<<<<<<<<<<<<<Navber>>>>>>>>>>>>>>>>>>>>>>>>> */}
            <header className='header' >
                <h2 className="logo">Logo</h2>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" />
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{
                        margin : 0, padding : 0
                    }}>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" >
                                    PRODUCT
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >
                                    TEAM
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >
                                    PRICING
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >
                                    RESOURCES
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    id="navbarDropdown"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    PLATFORM
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" >
                                        Automation
                                    </a>
                                    <a className="dropdown-item" >
                                        Scrapping
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    id="navbarDropdown"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Account
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" onClick={() => navigate('/signup')} >
                                        Signup
                                    </a>
                                    <a className="dropdown-item" onClick={() => navigate('/login')} >
                                        Login
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <button className="btn my-2 my-sm-0" type="submit">
                                Start Free Now
                            </button>
                            <div className="profile_image">
                                <img src={profile} alt="profile picture" />
                            </div>
                        </form>
                    </div>
                </nav>
            </header>
            {/* <<<<<<<<<<<<<<<<<<<<<<<<<Closed Navbar>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
        </div>
    )
}
