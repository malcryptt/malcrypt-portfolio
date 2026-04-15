import React from 'react';

const Section = ({ id, title, subtitle, bgImage, className = '', children }) => {
    return (
        <section id={id} className={`section ${className}`}>
            {bgImage && (
                <>
                    <div className="section-bg" style={{ backgroundImage: `url(${bgImage})` }}></div>
                    <div className="section-overlay"></div>
                </>
            )}
            <div className="tech-metadata mono">
                {id.toUpperCase()}_LOG: 0x{Math.floor(Math.random() * 10000).toString(16)}
            </div>
            <div className="container">
                {title && (
                    <h2 className="section-title glitch-text" data-subtitle={subtitle || `SYSTEM/${id.toUpperCase()}`}>
                        {title}
                    </h2>
                )}
                {children}
            </div>
        </section>
    );
};

export default Section;
