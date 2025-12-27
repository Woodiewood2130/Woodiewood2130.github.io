import './Header.css'
import ThemeToggle from './ThemeToggle'

function Header() {
    return (
        <header className="header">
            <div className="container">
                <nav className="nav">
                    <a href="/" className="logo">Dawood</a>
                    <div className="nav-links">
                        <a href="#projects">Projects</a>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                        <ThemeToggle />
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
