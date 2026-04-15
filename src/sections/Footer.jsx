import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">Malcrypt</div>
                    <nav className="footer-nav">
                        <a href="#featured">Featured</a>
                        <a href="#projects">Projects</a>
                        <a href="#about">About</a>
                        <a href="#booking">Booking</a>
                        <a href="#contact">Contact</a>
                    </nav>
                </div>
                <div className="footer-bottom">
                    <div className="footer-links">
                        <a href="https://wa.me/2349164703407">WhatsApp</a>
                        <a href="https://www.instagram.com/devluxe_tech/#">Instagram</a>
                        <a href="mailto:mal4crypt404@gmail.com">Email</a>
                    </div>
                    <div className="footer-copy">
                        &copy; {new Date().getFullYear()} Malcrypt. Built for real-world execution.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
