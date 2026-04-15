import React from 'react';
import Section from '../components/Section';

const About = () => {
    return (
        <Section id="about" title="About" subtitle="CORE_IDENTITY/PROFESSIONAL_PROFILE">
            <div className="about-content">
                <p>
                    I'm a security-focused systems engineer and AI developer committed to building technical architecture that isn't just "functional," but technically superior. My work focuses on the intersection of offensive security, high-performance distributed systems, and intelligent automation.
                </p>
                <p>
                    Currently, I conduct research at <strong>FUTA Research Lab</strong> and develop autonomous security auditors like <strong>Vektor</strong>. Every project I build is an exercise in engineering authority and execution.
                </p>
            </div>
        </Section>
    );
};

export default About;
