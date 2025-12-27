import './BlogSection.css'

function BlogSection() {
    const blogPosts = [
        {
            id: 1,
            title: "Building Modern Web Applications with React and TypeScript",
            excerpt: "A comprehensive guide to creating scalable and maintainable web applications using modern technologies.",
            date: "2024-01-15",
            readTime: "8 min read",
            category: "Development",
            image: "/images/blog-react-typescript.jpg"
        },
        {
            id: 2,
            title: "Design Systems: Creating Consistent User Experiences",
            excerpt: "Learn how to build and maintain design systems that scale across teams and projects.",
            date: "2024-01-10",
            readTime: "12 min read",
            category: "Design",
            image: "/images/blog-design-systems.jpg"
        },
        {
            id: 3,
            title: "Performance Optimization for Modern Websites",
            excerpt: "Techniques and best practices for ensuring your websites load fast and perform well.",
            date: "2024-01-05",
            readTime: "10 min read",
            category: "Performance",
            image: "/images/blog-performance.jpg"
        }
    ]

    return (
        <section className="blog-section">
            <div className="container">
                <div className="blog-header">
                    <h2 className="section-title slide-in-up">Latest Insights</h2>
                    <p className="blog-subtitle slide-in-up">
                        Sharing thoughts on web development, design, and technology trends.
                    </p>
                </div>
                
                <div className="blog-grid">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="blog-card card-hover">
                            <div className="blog-image-container">
                                {post.image ? (
                                    <img 
                                        src={post.image} 
                                        alt={post.title}
                                        className="blog-image"
                                        loading="lazy"
                                    />
                                ) : (
                                    <div className="blog-placeholder">
                                        <span className="placeholder-text">Coming Soon</span>
                                    </div>
                                )}
                                <div className="blog-category">{post.category}</div>
                            </div>
                            
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <span className="blog-date">{new Date(post.date).toLocaleDateString()}</span>
                                    <span className="blog-read-time">{post.readTime}</span>
                                </div>
                                <h3 className="blog-title">
                                    <a href="#" className="blog-link">
                                        {post.title}
                                    </a>
                                </h3>
                                <p className="blog-excerpt">{post.excerpt}</p>
                                <a href="#" className="blog-read-more">
                                    Read More
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
                
                <div className="blog-cta">
                    <p className="blog-cta-text">Want to see more? Check out my full blog archive.</p>
                    <a href="#" className="btn btn-primary blog-cta-btn">
                        View All Posts
                    </a>
                </div>
            </div>
        </section>
    )
}

export default BlogSection