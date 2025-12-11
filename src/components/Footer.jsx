import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-info">
                        <h3 className="footer-name">Mohammed Dawood</h3>
                        <p className="footer-title">Student & Web Developer</p>
                    </div>
                    <div className="footer-links">
                        <a href="mailto:business@example.com" className="footer-link">
                            Email
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                            GitHub
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
