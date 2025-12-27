import './ProjectCard.css'

function ProjectCard({ title, description, link, github, image, technologies }) {
    return (
        <article className="project-card card-hover">
            <div className="project-image-container">
                {image ? (
                    <img 
                        src={image} 
                        alt={`${title} project screenshot`}
                        className="project-image"
                        loading="lazy"
                    />
                ) : (
                    <div className="project-placeholder">
                        <div className="placeholder-icon">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <span className="placeholder-text">Coming Soon</span>
                    </div>
                )}
                <div className="project-overlay">
                    <div className="project-actions">
                        {link && link !== '#' && (
                            <a
                                href={link}
                                className="project-action-btn primary"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${title} project`}
                            >
                                <span>View Project</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 17l9.2-9.2M17 17V7H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                        )}
                        {github && github !== '#' && (
                            <a
                                href={github}
                                className="project-action-btn secondary"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${title} on GitHub`}
                            >
                                <span>GitHub</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                        )}
                    </div>
                </div>
            </div>
            
            <div className="project-content">
                <div className="project-header">
                    <h3 className="project-title">{title}</h3>
                    {technologies && technologies.length > 0 && (
                        <div className="project-tech">
                            {technologies.map((tech, index) => (
                                <span key={index} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    )}
                </div>
                <p className="project-description">{description}</p>
            </div>
        </article>
    )
}

export default ProjectCard