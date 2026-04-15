import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg">
                <img src="/assets/hero-bg.png" alt="Technical background" />
                <div className="hero-overlay"></div>
            </div>

            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title">Malcrypt</h1>
                    <p className="hero-subtitle">
                        I design and engineer secure systems, intelligent automation tools, and scalable applications built for real-world execution.
                    </p>
                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">Launch Research</a>
                        <a href="#booking" className="btn btn-secondary">Request Integration</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
