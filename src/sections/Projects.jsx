import React from 'react';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const categories = [
        {
            id: "security",
            title: "Security Tools",
            type: "security",
            projects: [
                {
                    name: "Taproot",
                    category: "security",
                    description: "Autonomous AI penetration testing agent for full black-box assessments.",
                    link: "https://github.com/mal4crypt/taproot"
                },
                {
                    name: "Obelisk",
                    category: "security",
                    description: "High-performance C++ analytical query engine with vectorized execution.",
                    link: "https://github.com/mal4crypt/obelisk"
                },
                {
                    name: "Sigil",
                    category: "security",
                    description: "Stateful protocol fuzzer and state machine inference engine.",
                    link: "https://github.com/mal4crypt/sigil"
                },
                {
                    name: "Casper",
                    category: "security",
                    description: "Network traffic analysis engine for covert channel detection.",
                    link: "https://github.com/mal4crypt/casper"
                },
                {
                    name: "Kronos",
                    category: "security",
                    description: "Distributed systems toolkit with Raft consensus and KV store.",
                    link: "https://github.com/mal4crypt/kronos"
                },
                {
                    name: "Axiom",
                    category: "security",
                    description: "Formal verification suite integrating TLA+, Z3, CBMC, and more.",
                    link: "https://github.com/mal4crypt/axiom"
                },
                {
                    name: "ChainGuard",
                    category: "security",
                    description: "Smart contract security analysis platform for EVM chains.",
                    link: "https://github.com/mal4crypt/chinguard"
                },
                {
                    name: "Phantom",
                    category: "security",
                    description: "Memory forensics and live process analysis toolkit.",
                    link: "https://github.com/mal4crypt/phantom"
                },
                {
                    name: "Locksmith",
                    category: "security",
                    description: "Automated web application security scanner.",
                    link: "https://github.com/mal4crypt/locksmith"
                }
            ]
        },
        {
            id: "web-platforms",
            title: "Web Platforms",
            type: "websites",
            projects: [
                {
                    name: "ODPay Bill Connect",
                    category: "websites",
                    description: "Utility billing and payment platform for managing essential services.",
                    link: "https://odpay-bill-connect.vercel.app/"
                },
                {
                    name: "Genova Health",
                    category: "websites",
                    description: "Healthcare coordination system connecting patients, doctors, and logistics.",
                    link: "https://genova-health.vercel.app/"
                },
                {
                    name: "WSL Interior Studio",
                    category: "websites",
                    description: "Interior design platform with premium UI presentation.",
                    link: "https://wsl-interior-studio.vercel.app/"
                },
                {
                    name: "Luxury Abode Blueprint",
                    category: "websites",
                    description: "Real estate showcase platform for high-end properties.",
                    link: "https://luxury-abode-blueprint.vercel.app/"
                }
            ]
        },
        {
            id: "applications",
            title: "Applications",
            type: "apps",
            projects: [
                {
                    name: "Vendora",
                    category: "apps",
                    description: "E-commerce and vendor management application.",
                    link: "https://vendora-chi.vercel.app/"
                }
            ]
        },
        {
            id: "ai-systems",
            title: "AI Systems",
            type: "ai",
            projects: [
                {
                    name: "Malcrypt AI",
                    category: "ai",
                    description: "Multi-domain AI assistant for programming, automation, red teaming, and research.",
                    link: "https://github.com/mal4crypt/malcrypt-ai"
                }
            ]
        },
        {
            id: "frontend-lab",
            title: "Frontend Lab",
            type: "frontend",
            projects: [
                { name: "Arcland", category: "frontend", description: "Premium UI Experience", link: "https://arcland-six.vercel.app/" },
                { name: "Cleriq", category: "frontend", description: "Technical Interface Design", link: "https://cleriq.vercel.app/" },
                { name: "Vantage", category: "frontend", description: "Data Visualization System", link: "https://vantage-hazel.vercel.app/" },
                { name: "Zella", category: "frontend", description: "Modern Web Infrastructure", link: "https://zella-gilt.vercel.app/" },
                { name: "Nestle UI", category: "frontend", description: "Corporate Design System", link: "https://nestle-pi.vercel.app/" },
                { name: "Orion", category: "frontend", description: "Futuristic UI Component Lab", link: "https://orion-five-plum.vercel.app/" },
                { name: "Payce", category: "frontend", description: "Fintech Interface Concept", link: "https://payce-teal.vercel.app/" },
                { name: "Dashly", category: "frontend", description: "Analytical Dashboard Suite", link: "https://dashly-orcin.vercel.app/" },
                { name: "Aily", category: "frontend", description: "AI-First Commerce Design", link: "https://aily-sandy.vercel.app/" },
                { name: "Fortis Pay", category: "frontend", description: "Secure Payment Gateway UI", link: "https://fortis-pay.vercel.app/" }
            ]
        }
    ];

    return (
        <div id="projects-container">
            {categories.map((cat) => (
                <Section key={cat.id} id={cat.id} title={cat.title} type={cat.type}>
                    <div className="project-grid">
                        {cat.projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                    {cat.id === "security" && (
                        <div className="more-projects-link mono">
                            <a href="https://github.com/mal4crypt" target="_blank" rel="noopener noreferrer">VIEW_MORE_SECURITY_PROJS</a>
                        </div>
                    )}
                    {cat.id === "frontend-lab" && (
                        <div className="more-projects-link mono">
                            <a href="https://github.com/malcryptt" target="_blank" rel="noopener noreferrer">VIEW_MORE_FRONTEND_WORK</a>
                        </div>
                    )}
                </Section>
            ))}
        </div>
    );
};

export default Projects;
