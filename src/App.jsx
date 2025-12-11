import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedProject from './components/FeaturedProject'
import Footer from './components/Footer'

function App() {
    // Real portfolio projects
    const projects = [
        {
            id: 1,
            title: 'Registra',
            description: 'A comprehensive registration and management platform. Built with modern web technologies to streamline the registration process with an intuitive user interface and robust backend functionality.',
            link: 'https://registra-six.vercel.app',
            github: '',
        },
        {
            id: 2,
            title: 'Middar CRM',
            description: 'A comprehensive Customer Relationship Management system designed and built from the ground up. Features include lead tracking, sales pipeline management, task automation, and detailed analytics dashboards.',
            link: 'https://crm.middar.com',
            github: '',
        },
        {
            id: 3,
            title: 'Middar HR System',
            description: 'Designed the user interface and experience for a complete HR Management System. Streamlines employee management, attendance tracking, leave requests, and payroll processing with an intuitive, modern interface.',
            link: 'https://www.middar.com',
            github: '',
        },
        {
            id: 4,
            title: 'Gliazzuri Football Club',
            description: 'A fully responsive football club website built from scratch. Features team rosters, match schedules, news updates, and fan engagement sections with a modern, sports-focused design aesthetic.',
            link: 'https://gliazzuri.github.io',
            github: 'https://github.com/gliazzuri/gliazzuri.github.io',
        },
    ]

    return (
        <div className="app">
            <Header />
            <main>
                <Hero />

                {/* Featured Projects */}
                <section className="projects-section">
                    {projects.map((project) => (
                        <FeaturedProject key={project.id} {...project} />
                    ))}
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default App
