import React from 'react';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const securityTools = [
        { name: "Taproot", category: "security", description: "An AI-powered autonomous penetration testing agent that performs full black-box security assessments using a ReAct reasoning loop powered by Claude." },
        { name: "Obelisk", category: "security", description: "A high-performance column-oriented analytical query engine built in C++17 with a custom SQL parser, vectorized execution engine (AVX2), and async I/O via io_uring." },
        { name: "Sigil", category: "security", description: "A stateful binary protocol fuzzer and protocol state machine inference engine for reverse engineering, IoT security, and embedded system auditing." },
        { name: "Casper", category: "security", description: "A network traffic intelligence engine that detects covert channels using machine learning and statistical analysis of traffic metadata." },
        { name: "Kronos", category: "security", description: "A distributed systems research toolkit implementing and testing consensus protocols, including a production-grade Raft implementation and linearizable key-value store." },
        { name: "Axiom", category: "security", description: "A unified formal verification suite integrating TLA+, TLC, CBMC, Z3, Crosshair, angr, and Daikon for safety-critical program analysis." },
        { name: "ChainGuard", category: "security", description: "An automated smart contract security analysis platform for EVM chains using static analysis, symbolic execution, fuzzing, and audit report generation." },
        { name: "Phantom", category: "security", description: "A memory forensics and live process analysis toolkit for detecting malware, hidden artifacts, and runtime indicators of compromise." },
        { name: "Locksmith", category: "security", description: "An automated web application security scanner focused on vulnerability discovery, classification, and structured reporting." },
        { name: "Vektor", category: "security", description: "An AI-powered Solana smart contract security auditor that simulates adversarial reasoning to detect vulnerabilities before deployment." }
    ];

    const websites = [
        { name: "ODPay Bill Connect", category: "websites", description: "A utility billing platform for paying and managing essential services, designed to simplify transactions and centralize utility payments." },
        { name: "Genova Health", category: "websites", description: "A healthcare coordination platform connecting patients, doctors, and logistics providers for consultations and medical delivery workflows." }
    ];

    const apps = [
        { name: "Vendora", category: "apps", description: "A comprehensive e-commerce and vendor management application built for high-scale retail operations." },
        { name: "Genova Health", category: "apps", description: "A healthcare coordination platform connecting patients, doctors, and logistics providers for consultations and prescriptions." }
    ];

    const aiSystems = [
        { name: "Malcrypt AI", category: "ai", description: "A multi-domain AI assistant designed for programming, red teaming, automation, research, and intelligent task execution." }
    ];
    const frontendLab = [
        { name: "UI Architecture", category: "frontend", description: "Minimalist, high-performance UI components and layout systems built for technical precision." },
        { name: "Visual Data Labs", category: "frontend", description: "Experimental data visualizations and interactive engineering dashboards." }
    ];

    return (
        <div id="projects">
            <Section
                id="security"
                title="Security Tools"
                subtitle="OFFENSIVE_SECURITY/PENETRATION_TOOLS"
                bgImage="/assets/security-bg.png"
            >
                <div className="project-grid">
                    {securityTools.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </Section>

            <Section id="websites" title="Websites" subtitle="DIGITAL_INFRASTRUCTURE/WEB_PLATFORMS">
                <div className="project-grid">
                    {websites.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </Section>

            <Section id="apps" title="Apps" subtitle="APPLICATION_ENGINEERING/MOBILE_NATIVE">
                <div className="project-grid">
                    {apps.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </Section>

            <Section
                id="ai"
                title="AI Systems"
                subtitle="NEURAL_COMPUTATION/LLM_AGENTS"
                bgImage="/assets/ai-bg.png"
            >
                <div className="project-grid">
                    {aiSystems.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </Section>

            <Section id="frontend" title="Frontend Lab" subtitle="INTERFACE_EXPERIMENTATION/UI_UX">
                <div className="project-grid">
                    {frontendLab.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Projects;
