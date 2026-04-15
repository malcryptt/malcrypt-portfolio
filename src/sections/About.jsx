import React from 'react';
import Section from '../components/Section';

const About = () => {
    return (
        <Section id="about" title="The Developer" subtitle="CORE_IDENTITY/PROFESSIONAL_PROFILE">
            <div className="about-grid">
                <div className="about-bio">
                    <p>
                        <strong>Abayomi Mayomikun</strong> — goes by <strong>Malcrypt</strong>. Cybersecurity student at FUTA, full-stack engineer, and red teamer with 4+ years shipping production software. I run <strong>DevLuxe Agency</strong> for web and product builds, and <strong>Raven-Security</strong> for offensive security work. I build things that are fast, intentional, and built to last — from AI-powered security tools to polished web products. If it's broken, I find it. If it needs building, I ship it.
                    </p>
                </div>
                <div className="about-stats">
                    <div className="stat-card">
                        <span className="stat-num">4+</span>
                        <span className="stat-text">YEARS EXPERIENCE</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-num">17+</span>
                        <span className="stat-text">MVPS SHIPPED</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-num">2</span>
                        <span className="stat-text">VENTURES FOUNDED</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-num">∞</span>
                        <span className="stat-text">BUGS HUNTED</span>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
