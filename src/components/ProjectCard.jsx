import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ name, description, category, link, linkText = "View Project", featured = false }) => {
    const accentColor = `var(--accent-${category})`;

    return (
        <div
            className={`project-card ${featured ? 'featured' : ''}`}
            style={{ '--card-accent': accentColor }}
        >
            <div className="card-content">
                <h3 className="project-name">{name}</h3>
                <p className="project-description">{description}</p>
                <div className="card-footer">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
                        {linkText}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
