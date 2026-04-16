import React from 'react';

const Section = ({ id, title, subtitle, bgImage, type, className = '', children }) => {
    return (
        <section id={id} className={`section ${className}`}>
            {bgImage && (
                <>
                    <div className="section-bg" style={{ backgroundImage: `url(${bgImage})` }}></div>
                    <div className="section-overlay"></div>
                </>
            )}
            <div className="container">
                {title && (
                    <h2 className={`section-title ${type}`} data-subtitle={subtitle || `SYSTEM/${id.toUpperCase()}`}>
                        {title}
                    </h2>
                )}
                {children}
            </div>
        </section>
    );
};

export default Section;
