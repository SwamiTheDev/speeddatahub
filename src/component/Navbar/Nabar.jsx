import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sling as Hamburger } from 'hamburger-react'
import closebtn from '../../assets/img/closebtn.png';
import './Navbar.css';

const NavBar = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const [isOpen, setOpen] = useState(false);

    const handleOffcanvasToggle = () => {
        setShowOffcanvas((prevShowOffcanvas) => !prevShowOffcanvas);
        setOpen(!isOpen);
    };

    const closeOffcanvas = () => {
        setOpen(false);
        setShowOffcanvas(false);
    };

    return (
        <div className="Navbar">
            <nav className="navbar navbar-expand-md">
                <div className="container">
                    <Link to="/" className="navbar-brand d-inline">
                        <p className='d-inline x' style={{ paddingTop: '0px', paddingBottom: '0px', marginRight: '0px' }}>speedtest</p>
                        <p className='d-inline y'>hub</p>
                    </Link>
                    <button
                        className="navbar-toggler toggle_btn"
                        type="button"
                        aria-controls="navbar-offcanvas"
                        aria-expanded={showOffcanvas}
                        aria-label="Toggle navigation"
                        onClick={handleOffcanvasToggle}
                    >
                        <Hamburger
                            size={20}
                            rounded
                            duration={0.5}
                            toggled={isOpen}
                            toggle={setOpen}
                            direction="right"
                            easing="ease-in"
                            color='white'
                            hideOutline={false}
                        />
                    </button>
                    <div className="collapse navbar-collapse" id="navbar-offcanvas">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item ms-2 me-2">
                                <Link to="/" className="nav-link ms-2 me-2 text-center" onClick={closeOffcanvas}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item ms-2 me-2">
                                <Link to="/about" className="nav-link ms-2 me-2" onClick={closeOffcanvas}>
                                    About
                                </Link>
                            </li>

                            <li className="nav-item ms-2 me-2">
                                <Link to="/contact" className="nav-link ms-2 me-2" onClick={closeOffcanvas}>
                                    Contact
                                </Link>
                            </li>
                            {/* <li className="nav-item ms-2 me-2">
                                <Link to="/footer" className="nav-link ms-2 me-2" onClick={closeOffcanvas}>
                                    footer
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>

            <div className={`offcanvas offcanvas-start ${showOffcanvas ? 'show' : ''}`} tabIndex="-1" id="offcanvasNavbar">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title ms-2  mt-3 mb-3" id="offcanvasNavbarLabel" style={{ letterSpacing: '15PX', fontWeight: '800', fontSize: '20px', color: '#ff4848' }}>STH</h5>
                    <button type="button" className="btn-close me-3 mt-3 mb-3" aria-label="Close" onClick={closeOffcanvas}>
                        <img src={closebtn} alt="" />
                    </button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link mb-3" onClick={closeOffcanvas}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link mb-3" onClick={closeOffcanvas}>
                                About
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/contact" className="nav-link mb-3" onClick={closeOffcanvas}>
                                Contact
                            </Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link to="/footer" className="nav-link mb-3" onClick={closeOffcanvas}>
                                footer
                            </Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
