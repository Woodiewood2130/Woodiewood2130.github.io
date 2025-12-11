import './Hero.css'

function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-badge">👋 Available for work</div>
                    <h1 className="hero-title">
                        Building <span className="text-gradient">exceptional</span> digital experiences
                    </h1>
                    <p className="hero-subtitle">
                        I'm Mohammed Dawood, a student and web developer passionate about creating beautiful, functional websites that make an impact.
                    </p>
                    <div className="hero-cta">
                        <a href="#projects" className="btn btn-primary">View Projects</a>
                        <a href="#contact" className="btn btn-secondary">Get in Touch</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
