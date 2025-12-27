import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import ProjectCard from './components/ProjectCard'
import BlogSection from './components/BlogSection'
import EnhancedFooter from './components/EnhancedFooter'
import ScrollToTop from './components/ScrollToTop'
import AccessibilityEnhancer from './components/AccessibilityEnhancer'
import './components/ProjectsSection.css'

function App() {
    // Real portfolio projects with enhanced data
    const projects = [
        {
            id: 1,
            title: 'Registra',
            description: 'A comprehensive registration and management platform. Built with modern web technologies to streamline the registration process with an intuitive user interface and robust backend functionality.',
            link: 'https://registra-six.vercel.app',
            github: '',
            technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
            image: '/images/registra-preview.jpg'
        },
        {
            id: 2,
            title: 'Middar CRM',
            description: 'A comprehensive Customer Relationship Management system designed and built from the ground up. Features include lead tracking, sales pipeline management, task automation, and detailed analytics dashboards.',
            link: 'https://crm.middar.com',
            github: '',
            technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
            image: '/images/middar-crm-preview.jpg'
        },
        {
            id: 3,
            title: 'Middar HR System',
            description: 'Designed the user interface and experience for a complete HR Management System. Streamlines employee management, attendance tracking, leave requests, and payroll processing with an intuitive, modern interface.',
            link: 'https://www.middar.com',
            github: '',
            technologies: ['Figma', 'UI/UX Design', 'React', 'Node.js'],
            image: '/images/middar-hr-preview.jpg'
        },
        {
            id: 4,
            title: 'Gliazzuri Football Club',
            description: 'A fully responsive football club website built from scratch. Features team rosters, match schedules, news updates, and fan engagement sections with a modern, sports-focused design aesthetic.',
            link: 'https://gliazzuri.github.io',
            github: 'https://github.com/gliazzuri/gliazzuri.github.io',
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
            image: '/images/gliazzuri-preview.jpg'
        },
    ]

    return (
        <div className="app">
            <AccessibilityEnhancer />
            <Header />
            <main id="main-content">
                <Hero />
                <About />
                {/* Featured Projects */}
                <section className="projects-section">
                    <div className="container">
                        <h2 className="section-title slide-in-up">Featured Projects</h2>
                        <div className="projects-grid">
                            {projects.map((project) => (
                                <ProjectCard key={project.id} {...project} />
                            ))}
                        </div>
                    </div>
                </section>
                <BlogSection />
                <Contact />
            </main>
            <EnhancedFooter />
            <ScrollToTop />
        </div>
    )
}

export default App
