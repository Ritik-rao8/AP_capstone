import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './navbar.css';

const Navbar=()=> {
    const navigate=useNavigate();
    const location=useLocation();
    let isMenuOpen=useState(false);
    const setIsMenuOpen=isMenuOpen[1];
    isMenuOpen=isMenuOpen[0];

    let navLinks=[
        { label: 'Home', path: '/' },
        { label: 'Find Players', path: '/find-players' },
        { label: 'Knowledge Hub', path: '/knowledge' },
        { label: 'About', path: '/about' },
    ];

    let isActive=(path)=>location.pathname===path;

    let handleNavClick=(path)=>{
        navigate(path);
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <button onClick={()=>navigate('/')} className="logo-button">
                        <span className="logo-text">BGMI Squad Finder</span>
                    </button>
                </div>

                <ul className="nav-links">
                    {navLinks.map((link)=>(
                        <li key={link.path}>
                            <button onClick={()=>handleNavClick(link.path)} className={`nav-link ${isActive(link.path)?'active':''}`}>
                                {link.label}
                                <span className="nav-underline"></span>
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="auth-buttons">
                    <button onClick={()=>navigate('/login')} className="btn-login">
                        <span className="btn-text">Log In</span>
                    </button>
                    <button onClick={()=>navigate('/signup')} className="btn-signup">
                        <span className="btn-text">Sign Up</span>
                    </button>
                </div>

                <button className={`hamburger ${isMenuOpen?'active':''}`} onClick={()=>setIsMenuOpen(!isMenuOpen)}>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>
            </div>

            {isMenuOpen && (
                <div className="mobile-menu">
                    <div className="mobile-menu-content">
                        <ul className="mobile-nav-links">
                            {navLinks.map((link)=>(
                                <li key={link.path}>
                                    <button onClick={()=>handleNavClick(link.path)} className={`mobile-nav-link ${isActive(link.path)?'active':''}`}>
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <div className="mobile-auth-buttons">
                            <button onClick={()=>handleNavClick('/login')} className="btn-login-mobile">
                                <span className="btn-text">Log In</span>
                            </button>
                            <button onClick={()=>handleNavClick('/signup')} className="btn-signup-mobile">
                                <span className="btn-text">Sign Up</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
