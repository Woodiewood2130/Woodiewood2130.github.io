import './Header.css'

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
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
