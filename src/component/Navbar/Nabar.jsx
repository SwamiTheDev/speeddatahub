import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Hamburger from 'hamburger-react';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }
    const [isOpen, setOpen] = useState(false)

    return (
        <nav className="navbar">
            <div className="container">

                <p className='nav_title'>SpeedTest<p className='d-inline'>Hub</p></p>

                <div className="menu-icon" onClick={handleShowNavbar}>
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li className='mt-3 _navlink'>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className='mt-3 _navlink'>
                            <NavLink to="/blog">Blog</NavLink>
                        </li>
                        <li className='mt-3 _navlink'>
                            <NavLink to="/projects">Projects</NavLink>
                        </li>
                        <li className='mt-3 _navlink'>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li className='mt-3 _navlink'>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar