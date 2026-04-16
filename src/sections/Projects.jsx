import React from 'react';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const categories = [
        {
            id: "security",
            title: "Security Labs",
            projects: [
                {
                    name: "Vektor",
                    description: "Autonomous Security Auditor for Solana smart contracts.",
                    category: "security",
                    link: "https://github.com/mal4crypt",
                    details: "Vektor is a multi-layered security engine designed to detect logical vulnerabilities in Solana programs. It uses a combination of static analysis and adversarial simulation to identify edge cases."
                },
                { name: "Taproot", category: "security", description: "Offensive reconnaissance framework for decentralized networks.", link: "https://github.com/mal4crypt" },
                { name: "Obelisk", category: "security", description: "High-performance vectorized analytical query engine built in C++17.", link: "https://github.com/mal4crypt" },
                { name: "Sigil", category: "security", description: "Stateful binary protocol fuzzer and state machine inference engine.", link: "https://github.com/mal4crypt" },
                { name: "Casper", category: "security", description: "ML-powered network traffic intelligence and covert channel detection.", link: "https://github.com/mal4crypt" }
            ]
        },
        {
            id: "ai",
            title: "Neural Engine / AI",
            projects: [
                { name: "Malcrypt AI", category: "ai", description: "Multi-domain AI assistant for red teaming, automation, and research.", link: "https://github.com/mal4crypt" }
            ]
        },
        {
            id: "web-systems",
            title: "Systems & Web",
            projects: [
                { name: "ODPay Bill Connect", category: "websites", description: "Utility billing platform designed for high-scale centralized payments.", link: "https://github.com/mal4crypt" },
                { name: "Vendora", category: "apps", description: "E-commerce and vendor management application for retail operations.", link: "https://github.com/mal4crypt" },
                { name: "Genova Health", category: "websites", description: "Healthcare coordination platform for consultations and medical logistics.", link: "https://github.com/mal4crypt" }
            ]
        }
    ];

    return (
        <div id="projects-container">
            {categories.map((cat) => (
                <Section key={cat.id} id={cat.id} title={cat.title}>
                    <div className="project-grid">
                        {cat.projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </Section>
            ))}
        </div>
    );
};

export default Projects;
