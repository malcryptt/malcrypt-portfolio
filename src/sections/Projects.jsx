import React from 'react';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const allProjects = [
        { name: "Taproot", category: "security", description: "An AI-powered autonomous penetration testing agent that performs full black-box security assessments using a ReAct reasoning loop powered by Claude.", link: "https://github.com/mal4crypt" },
        { name: "ODPay Bill Connect", category: "websites", description: "A utility billing platform for paying and managing essential services, designed to simplify transactions and centralize utility payments.", link: "https://github.com/mal4crypt" },
        { name: "Vendora", category: "apps", description: "A comprehensive e-commerce and vendor management application built for high-scale retail operations.", link: "https://github.com/mal4crypt" },
        { name: "Malcrypt AI", category: "ai", description: "A multi-domain AI assistant designed for programming, red teaming, automation, research, and intelligent task execution.", link: "https://github.com/mal4crypt" },
        { name: "UI Architecture", category: "frontend", description: "Minimalist, high-performance UI components and layout systems built for technical precision.", link: "https://github.com/mal4crypt" },
        { name: "Obelisk", category: "security", description: "A high-performance column-oriented analytical query engine built in C++17 with a custom SQL parser, vectorized execution engine (AVX2), and async I/O via io_uring.", link: "https://github.com/mal4crypt" },
        { name: "Genova Health", category: "websites", description: "A healthcare coordination platform connecting patients, doctors, and logistics providers for consultations and medical delivery workflows.", link: "https://github.com/mal4crypt" },
        { name: "Sigil", category: "security", description: "A stateful binary protocol fuzzer and protocol state machine inference engine for reverse engineering, IoT security, and embedded system auditing.", link: "https://github.com/mal4crypt" },
        {
            name: "Vektor",
            description: "Autonomous Security Auditor for Solana smart contracts.",
            category: "security",
            link: "https://github.com/mal4crypt",
            details: "Vektor is a multi-layered security engine designed to detect logical vulnerabilities in Solana programs. It uses a combination of static analysis and adversarial simulation to identify edge cases that traditional auditors miss. Features include weighted security scoring and educational exploit context."
        },
        { name: "Casper", category: "security", description: "A network traffic intelligence engine that detects covert channels using machine learning and statistical analysis of traffic metadata.", link: "https://github.com/mal4crypt" }
    ];

    return (
        <Section
            id="projects"
            title="Projects"
            subtitle="RESEARCH_&_ENGINEERING/MIXED_LABS"
            bgImage="/assets/security-bg.png"
        >
            <div className="project-grid">
                {allProjects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </Section>
    );
};

export default Projects;
