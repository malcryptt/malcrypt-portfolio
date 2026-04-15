import React from 'react';
import './CredibilityStrip.css';

const CredibilityStrip = () => {
    const items = [
        "4+ Years Experience",
        "Multiple Deployed Applications",
        "Security-Focused Development",
        "Full-Stack & AI Engineering"
    ];

    return (
        <div className="credibility-strip">
            <div className="container">
                <div className="strip-grid">
                    {items.map((item, index) => (
                        <div key={index} className="strip-item">
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CredibilityStrip;
