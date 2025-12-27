import './Contact.css'

function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact-content">
                    <div className="contact-info">
                        <h2 className="section-title">Get In Touch</h2>
                        <p className="contact-subtitle">
                            I'm always interested in hearing about new projects and opportunities. 
                            Let's create something amazing together.
                        </p>
                        
                        <div className="contact-methods">
                            <div className="contact-method">
                                <div className="method-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="method-content">
                                    <h3>Email</h3>
                                    <a href="mailto:business@example.com" className="method-link">
                                        business@example.com
                                    </a>
                                </div>
                            </div>
                            
                            <div className="contact-method">
                                <div className="method-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 10c0 6-5 10-5 10s-3-2-5-4-5 4-5 4 5 4 5 4 5-4 5-4c0 0-2-2-2-5 0-5 5-10 5-10s4 1 4 1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="method-content">
                                    <h3>Location</h3>
                                    <span className="method-text">Bahrain</span>
                                </div>
                            </div>
                            
                            <div className="contact-method">
                                <div className="method-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 2a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h12z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M9 14l3-3 3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 11v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="method-content">
                                    <h3>Availability</h3>
                                    <span className="method-text">Open to new opportunities</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="contact-form-container">
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    placeholder="Your name"
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input 
                                    type="text" 
                                    id="subject" 
                                    name="subject" 
                                    placeholder="What's this about?"
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows="5" 
                                    placeholder="Tell me about your project..."
                                    required
                                ></textarea>
                            </div>
                            
                            <button type="submit" className="btn btn-primary form-submit">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact