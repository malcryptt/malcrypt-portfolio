import React from 'react';
import Section from '../components/Section';
import './FeaturedProject.css';

const FeaturedProject = () => {
    return (
        <Section
            id="featured"
            title="Vektor"
            subtitle="FLAGSHIP_PROJECT/SMART_CONTRACT_AUDITOR"
            className="featured-section"
        >
            <div className="featured-container glass">
                <div className="featured-content">
                    <div className="featured-header">
                        <span className="featured-tag mono">PROD_READY</span>
                        <h3 className="featured-title glitch-text">SOLANA SECURITY AUDITOR</h3>
                    </div>
                    <p className="featured-desc">
                        An AI-powered Solana smart contract security auditor that simulates adversarial reasoning to detect vulnerabilities before deployment.
                    </p>
                    <div className="featured-tech mono">
                        <span>[ RUST ]</span>
                        <span>[ SOLANA ]</span>
                        <span>[ LLM_COGNITION ]</span>
                    </div>
                    <a href="https://github.com/mal4crypt" className="btn btn-primary glitch-text">Explore Vektor</a>
                </div>
                <div className="featured-footer mono">
                    BRIDGING_STATIC_ANALYSIS // HUMAN_AUDITING
                </div>
            </div>
        </Section>
    );
};

export default FeaturedProject;
