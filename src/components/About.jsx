import './About.css'

function About() {
    const skills = [
        { category: 'Frontend', items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'] },
        { category: 'Backend', items: ['Node.js', 'Express', 'RESTful APIs'] },
        { category: 'Tools', items: ['Git', 'Vite', 'VS Code', 'Figma'] },
        { category: 'Soft Skills', items: ['Problem Solving', 'Team Collaboration', 'Communication'] }
    ]

    return (
        <section id="about" className="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <h2 className="section-title">About Me</h2>
                        <p className="about-intro">
                            I'm a passionate student and web developer dedicated to creating beautiful, functional websites 
                            that make a meaningful impact. With a strong foundation in modern web technologies and a keen eye 
                            for design, I bridge the gap between aesthetics and functionality.
                        </p>
                        <div className="about-stats">
                            <div className="stat-item">
                                <span className="stat-number">50+</span>
                                <span className="stat-label">Projects Completed</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">3+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">Client Satisfaction</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="skills-section">
                        <h3 className="skills-title">Skills & Technologies</h3>
                        <div className="skills-grid">
                            {skills.map((skillGroup, index) => (
                                <div key={index} className="skill-category">
                                    <h4 className="category-title">{skillGroup.category}</h4>
                                    <div className="skill-items">
                                        {skillGroup.items.map((skill, skillIndex) => (
                                            <span key={skillIndex} className="skill-tag">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About