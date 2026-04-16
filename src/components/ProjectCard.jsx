import React, { useState } from 'react';
import Modal from './Modal';
import './ProjectCard.css';

const ProjectCard = ({ name, description, category, link, linkText = "View Project", featured = false, details = "" }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const accentColor = `var(--accent-${category})`;

    const handleAction = (e) => {
        if (details) {
            e.preventDefault();
            setIsModalOpen(true);
        }
    };

    return (
        <>
            <div
                className={`project-card ${featured ? 'featured' : ''}`}
                style={{ '--card-accent': accentColor }}
            >
                <div className="card-content">
                    <h3 className="project-name">{name}</h3>
                    <p className="project-description">{description}</p>
                    <div className="card-footer">
                        <a
                            href={link}
                            target={details ? "_self" : "_blank"}
                            rel="noopener noreferrer"
                            className="project-link"
                            onClick={handleAction}
                        >
                            {details ? "Technical Intel →" : linkText}
                        </a>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={name}
            >
                <div className="project-modal-body">
                    <p className="project-long-desc">{details || description}</p>
                    <div className="tech-spec-grid">
                        <div className="spec-item">
                            <label>Repository</label>
                            <span><a href={link} target="_blank" rel="noopener noreferrer" className="text-link">GitHub Source</a></span>
                        </div>
                        <div className="spec-item">
                            <label>Category</label>
                            <span>{category.toUpperCase()}</span>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default ProjectCard;
