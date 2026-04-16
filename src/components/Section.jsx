import React, { useEffect, useRef, useState } from 'react';

const Section = ({ id, title, subtitle, bgImage, type, className = '', children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section id={id} ref={sectionRef} className={`section ${className} ${isVisible ? 'is-visible' : ''}`}>
            {bgImage && (
                <>
                    <div className="section-bg" style={{ backgroundImage: `url(${bgImage})` }}></div>
                    <div className="section-overlay"></div>
                </>
            )}
            <div className="container">
                {title && (
                    <h2 className={`section-title ${type} ${isVisible ? 'is-active' : ''}`} data-subtitle={subtitle || `SYSTEM/${id.toUpperCase()}`}>
                        {title}
                    </h2>
                )}
                {children}
            </div>
        </section>
    );
};

export default Section;
