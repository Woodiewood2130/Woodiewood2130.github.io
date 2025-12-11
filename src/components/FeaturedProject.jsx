import './FeaturedProject.css'

function FeaturedProject({ title, description, link, github }) {
    return (
        <article className="featured-project">
            <div className="container">
                <div className="project-content">
                    <h2 className="project-title">{title}</h2>
                    <p className="project-description">{description}</p>
                    <div className="project-links">
                        {link && link !== '#' && (
                            <a
                                href={link}
                                className="project-link primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Project →
                            </a>
                        )}
                        {github && github !== '#' && (
                            <a
                                href={github}
                                className="project-link secondary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </article>
    )
}

export default FeaturedProject
